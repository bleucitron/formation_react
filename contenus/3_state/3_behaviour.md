# Comprendre l'état

On a vu comment mettre à jour l'état, via `setX`. Mais il est important de bien comprendre comment l'état fonctionne en React.

## Persistance de l'état

Un `state` donné est défini par le composant, mais **chaque instance maintient ses propres valeurs d'état**.

```jsx
// deux instances de Count, donc 2 state count qui vivent leur vie de leur côté
<Count />
<Count />
```

Les `state` de chaque instance sont initialisés au montage de l'instance (_mounting_), et détruits au démontage (_unmounting_).

Le reste du temps, les valeurs courantes des `state` sont persistées au fur et à mesure des rendus.

> On pourrait penser que `useState` étant ré-exécutée à chaque mise à jour, le `state` est réinitialisé à chaque fois. Ce n'est pas le cas.

**Tant qu'une instance n'est pas démontée, son état est persisté**. En revanche, si une instance est démontée, puis remontée un peu plus tard, son état est réinitialisé.

## Tableaux et objets

Les objets (et donc les tableaux) en Javascript sont capables de muter.

> En Javascript, un tableau est un objet.

```js
const o = { a: 1 }
o.a = 2; // { a: 2 }

const t = [1];
t.push(2); // [1, 2]
```

La mutation d'une valeur de type `object` ne change pas l'adresse de la valeur, ce qui signifie qu'au yeux de Javascript, la valeur n'a pas réellement changé, même si son "contenu" a muté.

Or React se sert de ce concept d'adresse pour décider si un rendu est nécessaire. **Si l'adresse de la nouvelle valeur d'un état est la même que celle de la précédente valeur, alors aucun rendu n'est déclenché**.

Si l'on veut utiliser un objet ou un tableau en tant qu'état, il faut impérativement avoir conscience que **muter ne sert à rien**.

Il est alors nécessaire de recréer un objet ou tableau nouveau.

```jsx
const [person, setPerson] = useState({ name: 'romain' })
setPerson({ ...person, age: 12 }) // un nouvel objet est créé

const [names, setNames] = useState(['romain'])
setNumbers([...names, 'sarah']) // un nouveau tableau est créé
setNumbers(names.filter(n => n.startsWith('s'))) // un nouveau tableau est créé
```

> Sauf exceptions, il est en général déconseillé d'utiliser un objet comme état. En revanche, les tableaux sont assez courants.

## Async màj

Pour éviter de faire trop de rendus potentiellement inutiles sur le vrai DOM, React temporise les phases de `render`, et les exécute par paquets.

Étudions le cas suivant:
```jsx
function Count() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>
        MàJ
      </button>
    </div>
  )
}
```

Au clic sur le bouton, on `increment()`, qui va incrémenter 3 fois `count` via `setCount(count + 1)`.

Intuitivement, à la fin de `increment`, la valeur actuelle de `count` devrait être `3`, mais en réalité `count` vaut `1`.

Pourquoi ?

Parce que React fait les mises à jour par paquets. Dans notre cas, il comprend qu'il faut faire 3 `setCount`, mais il va les faire tous d'un coup, dans le bon ordre.

Si on loggue la valeur de `count` au fur et à mesure, on se rend compte que `count` ne change pas entre les `setCount`. Parce que React n'a pas encore déclenché sa phase de `render`, et donc `count` n'a pas encore changé.

```jsx
function increment() {
  setCount(count + 1)
  console.log(count) // 0
  setCount(count + 1)
  console.log(count) // 0
  setCount(count + 1)
  console.log(count) // 0
}
```

En bref, **les mises à jour d'état via `setX` sont asynchrones**. Pour autant, `setX` ne renvoie pas une Promesse, ça ne sert donc à rien d'essayer d'utiliser `await`.

> La mécanique de mise à jour par paquet est interne au fonctionnement de React, on peut pas y accéder.

Pour résoudre le problème, une signature fonctionnelle est disponible pour `setX`. Les mises à jour sont toujours faites par paquet, et sont toujours asynchrones, mais cette fois, on fournit une fonction au lieu d'une valeur en argument de `setX`.

```jsx
function increment() {
  setCount(c => c + 1)
  setCount(c => c + 1)
  setCount(c => c + 1)
}
```

Cette fonction nous garantit d'avoir en argument (ici `c`) la valeur de l'état juste précédente lorsque React traitera le `render`. La valeur de retour de cette fonction est la future valeur de l'état lors de cette étape. En cumulant les fonctions de mises à jour, React fait évoluer l'état.

Pour résumer, **si une mise à jour d'état dépend de l'état précédent, il est recommandé d'utiliser l'écriture fonctionnelle**.

---

## TL;DR

- L'état est défini au niveau du composant, mais chaque instance maintient son propre état
- L'état d'une instance est persisté au fur et à mesure des `render`
- Si une instance est démontée, son état est réinitialisé
- `render` n'est déclenché que si l'adresse de la nouvelle valeur est différence de la précédente
- Muter ne sert à rien
- Les mises à jour d'état sont effectuées par paquets, et sont donc asynchrones
- Si une mise à jour d'état dépend de l'état précédent, utiliser l'écriture fonctionnelle de `setX`

---

## Exercices

1) Utiliser l'écriture fonctionnelle sur les mises à jour d'état qui le nécessitent
2) Donner un état `noobs` à `App`, et l'initialiser à `[]`
3) Prévoir un `<button />` dans `App` permettant d'ajouter une personne dans `noobs`, en utilisant l'utilitaire `getNoob`
4) Afficher les noms des `noobs` dans un `<ul>` de `App`

---

### à suivre: [Structure](./4_structure.md)

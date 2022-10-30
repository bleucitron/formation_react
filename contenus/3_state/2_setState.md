# Mettre à jour l'état

On a vu que la définition d'un `state` se faisait via `useState`.

```jsx
const [x, setX] = useState(0);
```

Pour rappel, `useState` nous renvoie donc un tableau de 2 éléments:
- la valeur actuelle de l'état
- la fonction pour changer cette valeur

Pour faire évoluer la valeur de notre `state`, il faut donc utiliser la fonction fournie par `useState`. Utiliser `useState` va faire 2 choses:
- mettre à jour la valeur de l'état
- déclencher le rendu de l'instance

**Il ne sert donc à rien de modifier le `state` directement**, car dans ce cas, même si la valeur change, aucun rendu n'est effectué, et il ne passe rien à l'écran.

```js
const [count, setCount] = useState(0);

count = 10 // ne sert à rien
setCount(10) // met à jour l'état, et déclenche le rendu
```

En général, **on modifie l'état en réaction à des évènements**, par exemple dans des event listeners, type `onClick`.

```jsx
function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(10)}>
        Mettre à 10
      </button>
    </div>
  )
}
```

Il est bien sûr possible d'encapsuler l'appel de `setX` dans une fonction si l'on veut.

```jsx
function Count() {
  const [count, setCount] = useState(0);

  function setTo10() {
    setCount(10)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={setTo10}>
        Mettre à 10
      </button>
    </div>
  )
}
```

> Comme `setX` déclenche le rendu d'une instance, il ne faut **jamais utiliser `setX` à la racine de la fonction d'un composant**, ce qui déclencherait une boucle infinie de rendu.

---

## TL;DR

- Changer l'état se fait en utilisant `setX` fourni par `const [x, setX] = useState()`
- Utiliser `setX` met à jour l'état et déclenche le rendu de l'instance
- Modifier l'état sans passer par `setX` ne fait rien
- En général on utilise modifie l'état en réaction à des évènements
- Ne jamais utiliser `setX` à la racine d'un composant

---

## Exercices

1) Ajouter un `<button />` dans `House` permettant d'augmenter les `points` de chaque `House`
2) Ajouter un `<button />` qui permet de réinitialiser les `points` de chaque `House` à `0`
3) Ajouter un `<button />` dans `House` qui permet d'inverser l'état `open`
4) Afficher les `<Student />` dans `House` uniquement si `open` est `true`
5) Augmenter l'`exp` de chaque `Student` au `mousemove` sur l'élément principal du composant

---

### à suivre: [Comprendre l'état](./3_behaviour.md)

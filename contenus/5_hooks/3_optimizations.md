# Optimisations

Par défaut, React rerend, c'est-à-dire met à jour le DOM virtuel, de tous les composants dont les `props` ou le `state` ont changé, ainsi que tous les enfants, et ce même ceux-ci n'en ont pas besoin.

**La mécanique de rendu de base de React peut donc s'avérer très inefficace** sur de grosses applications, et des stratégies d'optimisation sont prévues.

## [`React.memo`](https://fr.reactjs.org/docs/react-api.html#reactmemo)

Une première solution d'optimisation concerne directement les enfants qui sont rendus systématiquement si un de leurs ancêtres directs a changé.

On peut "enrober" un composant que l'on sait "pur" par `React.memo`.

> Un composant pur est un composant dont on sait qu'il n'a pas d'effet de bord: il affichera toujours la même chose pour les mêmes `props`.

```jsx
function Personne(props) {
  return <div>{props.name} {props.familyName}</div>
}

const PersonneOpti = React.memo(Personne); // version optimisé de Personne

<Personne name='Romain' familyName="l'Ourson" />
<PersonneOpti name='Romain' familyName="l'Ourson" />
```

**Un composant *mémoisé* ne sera pas rerendu si toutes ses `props` sont inchangées**.

> Par défaut, la comparaison est faite en "surface".

## [`useMemo()`](https://fr.reactjs.org/docs/hooks-reference.html#usememo)

Parfois, certains calculs au sein d'un composant sont lourds, et on veut éviter de les refaire systématiquement. On a déjà évoqué ce cas dans le chapitre sur les effets.

Dans le cas ci-dessous, s'il n'y a que `z` qui change, le `<Composant>` est re-rendu, et donc le `calculLourd` également, alors qu'il n'y a pas besoin vu que `x` et `y` n'ont pas changé.

```jsx
function Composant(props) {
  const {x, y, z} = props;
  const resultat = calculLourd(x, y); // recalculé à chaque rendu

  return <div>{resultat}</div>
}
```

Pour optimiser ce cas, on peut utiliser **`useMemo`, qui permet d'éviter de refaire un calcul coûteux si les variables dont il dépend n'ont pas changé**.

```jsx
function Composant(props) {
  const {x, y, z} = props;
  const resultat = useMemo(() => calculLourd(x, y), [x, y]); // ne sera mis à jour que si x ou y change

  return <div>{resultat}</div>;
}
```

## [`useCallback()`](https://fr.reactjs.org/docs/hooks-reference.html#usecallback)

`useCallback` un équivalent de `useMemo` pour les fonctions. Il permet notamment de garantir que les références des fonctions définies dans un composant et passées en `props` plus bas ne changent pas. Cela permet de garder optimisé un composant créé avec `React.memo`.

```js
function _Enfant(props) {
  return <div onClick={props.log}>Click</div>;
}
const Enfant = React.memo(Enfant);

function Parent(props) {
  const { a } = props;

  function log(a) {
    console.log('A', a)
  }

  const logMemo = useCallback(
    () => log(a),
    [a],
  );

  return <Enfant log={logMemo} />; // la prop log de Enfant ne changera pas systématiquement à chaque rendu
}
```

---

## TL;DR

- `useMemo` permet de ne pas refaire des calculs si ses dépendances n'ont pas changé
- `useCallback` est similaire à `useMemo`, pour les fonctions.
- `useCallback` permet notamment d'éviter de rerendre inutilement des composants enfants

---

## Exercices

1. Calculer la liste des noms des `House` à partir de `students`, et optimiser son calcul

---

### À suivre: [Autres hooks](./4_other.md)

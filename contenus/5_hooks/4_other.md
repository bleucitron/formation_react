# Autres hooks

## [`useRef()`](https://fr.reactjs.org/docs/hooks-reference.html#useref)

Permet de mettre en mémoire des données sans passer par un `state`, et donc sans rerendre une partie de l'arbre de composant.

Utile notamment pour "sortir" du paradigme React et aller chercher les vrais éléments du DOM.

## [`useReducer()`](https://fr.reactjs.org/docs/hooks-reference.html#usereducer)

Permet de consolider les évolutions d'état complexes au sein d'un reducer, qui est une fonction dont le rôle est de mettre à jour un état selon les payloads qu'on lui fournit.

Fonctionne sur un principe similaire à ce que fait Redux.

## [...et d'autres](https://reactjs.org/docs/hooks-reference.html)

## [Hooks personnalisés](https://fr.reactjs.org/docs/hooks-custom.html)

Un hook n'est qu'une fonction exécutée à l'intérieur d'un composant.

Toute fonction peut être un hook valide à 2 conditions:

- le nom de cette fonction commence par `use`
- on respecte les règles des hooks

À partir de là, **on peut créer des hooks personnalisés, nous permettant de combiner différents hooks dans un seul et même hook, pour partager une même logique entre différents composants**.

> Il existe énormément de librairies proposant des hooks personnalisés, comme [ReactRedux](https://react-redux.js.org/api/hooks) ou [ReactQuery](https://tanstack.com/query/v4/docs/adapters/react-query).

```jsx
function useCoord(x0, y0, z0) {
  const [x, setX] = useState(x0);
  const [y, setY] = useState(y0);
  const [z, setZ] = useState(z0);

  function setAll(x, y, z) {
    setX(x);
    setY(y);
    setZ(z);
  }

  return {coords: {x, y, z}, setX, setY, setZ, setAll};
}

function Point() {
  const {coords, setX, setY, setZ, setAll} = useCoords(1, 2, 3);
  return <div>{x} {y} {z}</div>
}
```

---

## Exercices

1. Créer un hook personnalisé `useExp` permettant de faire augmenter un state d'`exp` toutes les secondes.

## À suivre: [Vers l'infini et au-delà](../6_beyond/index.md)

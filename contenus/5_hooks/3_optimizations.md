# Optimisations

## [`React.memo`](https://fr.reactjs.org/docs/react-api.html#reactmemo)

Avant de parler des hooks d'optimisation, on va parler de `React.memo`, qui permet également d'optimiser.

## [`useMemo()`](https://fr.reactjs.org/docs/hooks-reference.html#usememo)

Permet d'éviter de refaire un calcul coûteux si les variables dont il dépend n'ont pas changé.

```js
const resultat = useMemo(() => calculQuiCouteCher(a, b), [a, b]); // ne sera mis à jour que si a ou b change
```

## [`useCallback()`](https://fr.reactjs.org/docs/hooks-reference.html#usecallback)

Permet d'éviter de rédéfinir une fonction si les variables dont elle dépend n'ont pas changé. C'est un équivalent de `useMemo()` pour les fonctions.

```js
const fonction = useMemo(
  () => () => fonctionQueJeNeVeuxPasRedéfinir(a, b),
  [a, b],
); // ne sera mis à jour que si a ou b change
const fonction = useCallback(
  () => fonctionQueJeNeVeuxPasRedéfinir(a, b),
  [a, b],
); // équivalent de la ligne précédente
```

---

## TL;DR

- `useMemo` permet de ne pas refaire des calculs si ses dépendances n'ont pas changé
- `useCallback` est similaire à `useMemo`, pour les fonctions.
- `useCallback` permet notamment d'éviter de rerendre inutilement des composants enfants

---

## Exercices

1.

## À suivre: [Autres hooks](./4_other.md)

# Autres hooks

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

## [`useRef()`](https://fr.reactjs.org/docs/hooks-reference.html#useref)

## [`useContext()`](https://fr.reactjs.org/docs/hooks-reference.html#usecontext)

## [`useReducer()`](https://fr.reactjs.org/docs/hooks-reference.html#usereducer)

## [Hooks personnalisés](https://fr.reactjs.org/docs/hooks-custom.html)

Un hook n'est qu'une fonction exécutée à l'intérieur d'un composant.

Toute fonction peut être un hook valide à 2 conditions:

- le nom de cette fonction commence par `use`
- on respecte les règles des hooks

## Exercices

Mettre en place les comportements suivants:

1. > Faire en sorte de pouvoir ajouter un `<Pokemon>` en tant que `<TrainedPokemon>` en cliquant dessus

2. > Faire en sorte de pouvoir supprimer un `<TrainedPokemon>` en cliquant dessus

3. > Créer un système de filtre par type de Pokemon

4. > Créer un custom hook qui gère l'experience et le fait de l'autoincrémenter toutes les secondes. Ce hook doit pouvoir se customiser avec `baseExp` (la valeur initiale de l'expérience) et `expIncrement` (le delta d'expérience qu'on ajoute toutes les secondes). Ce hook doit renvoyer la valeur `exp` mise à jour, ainsi qu'une méthode `setExp` permettant de la màj "manuellement".

## À suivre: [Écosystème React](../4_ecosystem/index.md)

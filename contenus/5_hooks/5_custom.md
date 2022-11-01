# [Hooks personnalisés](https://fr.reactjs.org/docs/hooks-custom.html)

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

## À suivre: [Vers l'infini et au-delà](../6_beyond/index.md)

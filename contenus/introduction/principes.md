# Principes

React a été développé pour améliorer:

- l'architecture
- le parcours de données
- les performances
- le code

On peut paraphraser les objectifs de React:

- simplifier l'architecture des applications
- clarifier le parcours des données au sein de l'application
- améliorer les performances d'exécution
- rapprocher le code écrit des éléments affichés

## Architecture par composants

Le principe est de **créer des "éléments" d'interface personnalisables et réutilisables** que l'on va organiser sous forme d'arbre, avec des parents et des enfants.

Ce sont ces "éléments" que l'on appelle "composants".

React n'a pas inventé le modèle d'architecture par composants, mais l'a très largement popularisé.

> #### Créer des "éléments" d'interface personnalisables et réutilisables

### Définition d'un composant

En pratique, **un composant est une fonction, qui, à partir de données, crée des instances de composant**.

```js
MonComposant: data => instance;
```

C'est un concept similaire aux classes de la Programmation Orientée Objet.

Une comparaison simple est l'être humain. On peut considérer que "Humain" est un composant à partir duquel on va créer des instances d'humains, des individus. Les individus possèdent les caractéristiques communes aux Humains, mais ont des caractéristiques qui leur sont propres, comme le nom, la taille, le poids...

> #### Un composant est une fonction, qui, à partir de données, crée des instances de composant

### Arbre de composants

**Un modèle par composants est structuré en arbre**. Des composants parents ont des composants enfants, et ainsi de suite.

Comme dans tout arbre, un parent peut avoir un ou plusieurs enfants, mais en revanche un enfant n'a qu'un seul parent.

> #### Un modèle par composants est structuré en arbre, avec des parents et des enfants

### Composants standards

Il est courant de comparer les composants aux Lego. Un composant serait alors un moule, tandis que l'instance du composant serait la pièce fabriquée avec ce moule.

Avec cette image, chaque instance est une brique à partir de laquelle on construit des briques plus complexes, jusqu'à obtenir un bateau pirate complet - notre application.

De même que pour les Lego, **React fournit des composants standards, des "briques de base", à partir desquels on va construire des composants plus complexes**.

Pour chaque élément HTML standard (`div`, `p`, `h1`, `section`, ...), React fournit le composant équivalent.

> #### React fournit des composants standards, des "briques de base", à partir desquels on va construire des composants plus complexes.

### Composants personnalisés

Tout l'intérêt du modèle par composants est de pouvoir combiner les briques pour créer de nouvelles briques plus complexes.

C'est ce qu'on appelle les composants personnalisés.

**Un composant personnalisé peut être construit à partir de composants standard et/ou d'autres composants personnalisés**.

> #### Un composant personnalisé peut être construit à partir de composants standard et/ou d'autres composants personnalisés.

## Flux de données unidirectionnel

## DOM virtuel

## JSX

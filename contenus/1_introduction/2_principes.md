# Principes

React a été développé pour améliorer:

- l'architecture
- le parcours de données
- les performances
- le code

On peut paraphraser les objectifs de React:

- [simplifier l'architecture](./2_principes.md#architecture-par-composants) des applications
- [clarifier le parcours des données](./2_principes.md#flux-de-données-unidirectionnel) au sein de l'application
- [améliorer les performances](./2_principes.md#dom-virtuel) d'exécution
- [rapprocher le code écrit des éléments affichés](./2_principes.md#à-suivre-jsx)

## Architecture par composants

Le principe est de **créer des "éléments" d'interface personnalisables et réutilisables** que l'on va organiser sous forme d'arbre, avec des parents et des enfants.

Ce sont ces "éléments" que l'on appelle "composants".

React n'a pas inventé le modèle d'architecture par composants, mais l'a très largement popularisé.

### Définition d'un composant

En pratique, **un composant est une fonction, qui, à partir de données, crée des instances de composant**.

```js
MonComposant: data => instance;
```

C'est un concept similaire aux classes de la Programmation Orientée Objet.

Une comparaison simple est l'être humain. On peut considérer que "Humain" est un composant à partir duquel on va créer des instances d'Humains, des individus. Les individus possèdent les caractéristiques communes aux Humains, mais ont des caractéristiques qui leur sont propres, comme le nom, la taille, le poids...

Une fois défini, un composant va donc permettre de créer des instances de ce composant, qui permettront à la fin du cycle de rendu de générer des éléments HTML équivalents. On reparlera plus tard de ce qu'est le cycle de rendu.

En général, pour les différencier, on écrit:

- `MonComposant` pour le composant
- `<MonComposant>` pour une instance

Il est courant de désigner à l'oral une instance de composant par le terme "composant". Cet amalgame n'est pas important si on a bien saisi la nuance.

### Arbre de composants

**Un modèle par composants est structuré en arbre**. Des composants parents ont des composants enfants, et ainsi de suite.

Comme dans tout arbre, un parent peut avoir un ou plusieurs enfants, mais en revanche un enfant n'a qu'un seul parent.

L'arbre de composants ainsi créé va correspondre à l'arbre HTML qui sera généré par les cycles de rendu React.

### Composants standards

Il est courant de comparer les composants aux Lego. Un composant serait alors un moule, tandis que l'instance du composant serait la pièce fabriquée avec ce moule.

Avec cette image, chaque instance est une brique à partir de laquelle on construit des briques plus complexes, jusqu'à obtenir un bateau pirate complet - notre application.

De même que pour les Lego, **React fournit des composants standards, des "briques de base", à partir desquels on va construire des composants plus complexes**.

Pour chaque élément HTML standard (`div`, `p`, `h1`, `section`, ...), React fournit le composant équivalent.

### Composants personnalisés

Tout l'intérêt du modèle par composants est de pouvoir combiner les briques pour créer de nouvelles briques plus complexes.

C'est ce qu'on appelle les composants personnalisés.

**Un composant personnalisé peut être construit à partir de composants standards et/ou d'autres composants personnalisés**.

## Flux de données unidirectionnel

Un des gros problèmes que pose une application devant gérer l'affichage et la mise à jour de plus en plus de données est la circulation de ces données au sein de
l'arbre de composants.

### ~~Two-way data binding~~

Avant React, la plupart des frameworks utilisaient le "two-way data binding", c'est-à-dire la liaison de données à double sens. Dans ce modèle, les données circulent dans les 2 sens, du parent vers l'enfant, et de l'enfant vers le parent. Chaque élément (ou composant) a potentiellement le pouvoir d'influencer sur la données qu'on lui a fourni, et par la même occasion impacter sur d'autres éléments qui partagent l'accès à cette donnée.

Le principal problème de la liaison de données à double sens est le potentiel de désynchronisation de la donnée.
En effet, dans ce cas, la donnée ne possède pas de "propriétaire" unique, et au fur et mesure des modifications successives par différents éléments, il devient possible de se retrouver avec deux éléments partageant une même donnée, avec 2 valeurs différentes, sans savoir quelle est la valeur valide.

### Garantir une source de vérité unique

Ce problème est réglé par la mise en place d'un flux de données unidirectionnel, connu dans l'écosystème React comme [Flux](https://facebook.github.io/flux/).

Dans une application React, **les données descendent, et ne remontent jamais**. Cela permet de garantir une **single source of truth**, source unique de vérité.

On considère généralement que "les évènements remontent", permettant la mise à jour des données, et leur redescente.

Il est probablement plus juste de considérer que **la mise à jour des données se fait par procuration**.

## [DOM virtuel](https://fr.reactjs.org/docs/faq-internals.html)

### Le coût du DOM

**La manipulation du DOM coûte cher au navigateur**.

À chaque ajout, modification ou suppression d'un élément ou d'un attribut, des opérations de [Reflow et/ou Repaint](https://medium.com/@suhas010/what-the-heck-is-repaint-and-reflow-in-the-browser-b2d0fb980c08) vont être déclenchées. Ces opérations calculent les positions, dimensions, couleurs de tous les éléments présents dans le DOM en fonction du HTML et du CSS.

Tous les frameworks essaient de minimiser ces opérations car elles peuvent compromettre la fluidité de l'application.

React s'est démarqué avec l'approche du [DOM Virtuel](https://reactjs.org/docs/faq-internals.html).

### En faire le moins possible

Le principe est de construire une représentation virtuelle mais fidèle de l'arbre DOM. Cette représentation, le DOM Virtuel, n'a pas de réalité physique au sens du navigateur, c'est-à-dire qu'il n'y a d'élément HTML associé, ils sont simplement représentés.

Lors des mises à jour de son arbre de composants, **React va d'abord appliquer les changements sur le DOM virtuel**. Puis il compare le DOM Virtuel au DOM réel, et ne vient **manipuler le DOM réel que lorsque que cela est nécessaire**.

De plus, des regroupements ("batchs") de mises à jour de l'arbre de composants sont effectués afin de réduire encore le travail réel que le navigateur va fournir sur le vrai DOM.

Toute cette mécanique est interne à React, les développeu.r.se.s n'ont pas besoin de s'en soucier.

Cette approche stratégique du travail sur le DOM a permis à React d'atteindre des performances bien meilleures, et a contribué à sa popularité.

[Des alternatives à React commencent à remettre en cause ce principe](https://svelte.dev/blog/virtual-dom-is-pure-overhead).

---

## TL;DR

- Le principe est de créer des "éléments" d'interface personnalisables et réutilisables

### Composants

- Un composant est une fonction, qui, à partir de données, crée des instances de composant

- Les composants sont structurés en arbre, avec des parents et des enfants

- React fournit des composants de base, à partir desquels on va construire des composants plus complexes

- Un composant personnalisé peut être construit à partir de composants standards et/ou d'autres composants personnalisés

### Flux de données

- Les données descendent et remontent jamais

- La mise à jour des données se fait par procuration

### DOM virtuel

- Les opérations sur le DOM coûtent cher

- React applique d'abord les mises à jour sur un DOM Virtuel

- Seules les différences sont réellement appliquées au DOM réel

## à suivre: [JSX](./3_jsx.md)

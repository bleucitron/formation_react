# Les classes ça pue

Le fait d'utiliser des classes Javascript pour définir des composants React pose un certain nombre de problèmes.

Assez vite, React a introduit les composants fonctionnels dans le cas, majoritaire, où un composant n'a ni `state`, ni autre cycle de vie que `render()`. Cela permettait déjà de simplifier l'écriture dans de nombreux cas.

Mais les composants stateful ou nécessitant un cycle de vie particulier demeuraient un problème.

[Trois problèmes principaux](https://youtu.be/dpw9EHDh2bM?t=412) ont été identifiés:

- le "Wrapper Hell"
- les "Huge Components"
- `this`

## Le Wrapper Hell

Afin de pouvoir réutiliser des comportements sur différents composants, on a pris l'habitude d'encapsuler nos composants dans des composants dits HOC (High Order Component). Ces HOC n'affichent en général rien, se contentent de transférer les props à un composant enfant en y ajoutant un comportement particulier.

Cette méthode fonctionne, mais utilisée régulièrement amène vite à plusieurs niveaux de HOC empilés les uns sur les autres, rendant difficiles la maintenabilité de l'arbre de composants.

## Les Huge Components

Il arrive souvent de devoir séparer de la logique cohérente, voire même de la dupliquer, en plusieurs endroits, en général dans des méthodes de cycle de vie.

## `this`

Le fonctionnement de `this` pose souvent problème à des développeurs de tous niveaux, et complexifie grandement la compréhension du fonctionnement de React.

---

L'équipe de React s'est rendue compte qu'en essayant de corriger un de ces problèmes, on ne faisait qu'empirer un autre.

Parce qu'en réalité, ces 3 problèmes ne sont que 3 symptômes du même problème: les classes.

**Afin de pouvoir se passer des classes, et continuer à profiter de la mécanique React, on a introduit le concept de Hook**.

**Les hooks s'utilisent obligatoirement sur des composants fonctionnels**.

Ils permettent de:

- partager facilement de la logique entre composants, sans créer de HOC
- garder ensemble de la logique similaire dans un même composant
- ne pas utiliser de binding

Il également important de comprendre que **les composants classes et fonctionnels peuvent tout à fait coexister** et interagir au sein de la même application React, sans que cela ne crée de problème.

## TL;DR

- Les Hooks permettent de se passer de classes
- Les Hooks permettent d'utiliser du `state` dans un composant fonctionnel
- Les Hooks permettent d'utiliser le cycle de vie dans un composant fonctionnel
- Les composants classes et fonctionnels peuvent coexistent sans souci

## Exercices

1. > Créer un dossier `hooks` au même endroit que `classes`

À partir de maintenant, on va travailler exclusivement dans `hooks`.

## À suivre: [Hooks principaux](./2_hooks_principaux.md)

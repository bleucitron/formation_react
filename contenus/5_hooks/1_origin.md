# Origines des Hooks

Initialement on utilisait des classes Javascript pour définir des composants React. Mais cela posait un certain nombre de problèmes.

[Trois problèmes principaux](https://youtu.be/dpw9EHDh2bM?t=412) ont été identifiés:

- le "Wrapper Hell"
- les "Huge Components"
- `this`

## Le Wrapper Hell

Afin de pouvoir réutiliser des comportements sur différents composants, on a pris l'habitude d'encapsuler nos composants dans des composants dits HOC (High Order Component). Ces HOC n'affichent en général rien, se contentent de transférer les props à un composant enfant en y ajoutant un comportement particulier.

Cette méthode fonctionne, mais utilisée régulièrement amène vite à plusieurs niveaux de HOC empilés les uns sur les autres, rendant difficiles la maintenabilité de l'arbre de composants.

## Les Huge Components

Avec la syntaxe de classes, la définition de composants était souvent lourde et verbeuse. De plus en plus de code, parfois dupliqué, était nécessaire pour décrire certains comportements. De la logique cohérente devait parfois être séparée en différents endroits.

Cela a pour conséquence d'augmenter le nombre de lignes de code à écrire, et de rendre difficile la lecture du code.

## `this`

Le fonctionnement de `this` en Javascript pose souvent problème à des développeurs de tous niveaux.

Dans les composants classes, utiliser `this` est indispensable, mais complexifie grandement l'écriture de composants, notamment à cause du *binding* de méthodes, qui est nécessaire.

Il est courant d'avoir des composants classe avec ce genre de code au début:
```js
this.updateX = this.updateX.bind(this);
this.updateY = this.updateY.bind(this);
this.updateZ = this.updateZ.bind(this);
this.selectName = this.selectName.bind(this);
this.changeInput = this.changeInput.bind(this);
this.addPerson = this.addPerson.bind(this);
this.editPerson = this.editPerson.bind(this);
this.removePerson = this.removePerson.bind(this);
...
```

Ce genre d'opération est nécessaire avec les composants classes, mais n'apporte aucune réelle plus-value logique.

## Enter hooks

L'équipe de React s'est rendue compte qu'en essayant de corriger un de ces problèmes, on ne faisait qu'en empirer un autre.

Parce qu'en réalité, ces 3 problèmes ne sont que 3 symptômes du même problème: les classes.

Pour se passer des classes, il a donc été nécessaire de **pouvoir définir des composants React avec des fonctions simples**, qu'on appelle des composants fonctionnels.

Mais afin de pouvoir continuer à utiliser la mécanique de React avec des composants fonctionnels, il a fallu introduire le concept de hooks.

Les hooks permettent de:

- partager facilement de la logique entre composants, sans créer de HOC
- regrouper la logique similaire dans chaque composant
- ne pas utiliser de binding

> Il également important de comprendre que **les composants classes et fonctionnels peuvent tout à fait coexister** et interagir au sein de la même application React, sans que cela ne crée de problème.

## C'est quoi un hook ?

Pour faire simple, **un hook est une fonction dont le nom commence par `use`**. Ce genre de fonctions est interprété par React en tant que fonction spéciale, et s'intègre dans la mécanique de `render` à différents endroits, selon les hooks.

On a déjà vu 2 hooks: `useState` et `useEffect`.

[Il y en a plusieurs autres](https://fr.reactjs.org/docs/hooks-reference.html), dont:
- `useContext`
- `useMemo`
- `useCallback`
- `useRef`
- `useReducer`

## [Règles des hooks](https://fr.reactjs.org/docs/hooks-rules.html)

Pour utiliser correctement un hook, il faut respecter 2 règles:
- un hook ne peut s'exécuter qu'au sein d'un composant fonctionnel
- un hook doit être exécuté au niveau racine d'un composant

La 2ème règle est particulièrement importante, car, les hooks n'ayant pas de nom, **React a besoin de toujours exécuter les hooks d'un composant dans le même ordre**, pour éviter de se perdre.

> Notamment, il ne faut pas mettre un hook dans un `if`.

---

## TL;DR

- Les classes ça pue
- Les composants classes et fonctionnels peuvent coexistent sans souci
- Les hooks permettent de se passer de classes
- Un hook est une fonction dont le nom commence par `use`
- Les hooks ne s'utilisent que dans des composants fonctionnels
- Les hooks d'un composant doivent toujours être exécutés dans le même ordre

---

### À suivre: [Contexte](./2_context.md)

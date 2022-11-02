# React avancé

## [Strict mode](https://fr.reactjs.org/docs/strict-mode.html#gatsby-focus-wrapper) et [linter](https://github.com/jsx-eslint/eslint-plugin-react)

Utiliser le [Strict mode](https://fr.reactjs.org/docs/strict-mode.html#gatsby-focus-wrapper) de React permet d'activer des avertissements additionnels pour éviter certains problèmes.

Pour encore plus de sécurité, il est recommandé d'utiliser le [plugin React d'eslint](https://github.com/jsx-eslint/eslint-plugin-react).

## [`children`](https://fr.reactjs.org/docs/glossary.html#propschildren)

Il est possible de définir des enfants d'instance, que l'on peut récupérer avec la props spéciale `children`. Cela permet de créer des "trous" dans un composant, que l'on peut remplir avec n'importe quel instance de composant.

```jsx
<Layout>
  <div>Coucou</div>
</Layout>

// ou encore
<Layout>
  <h1>Ahah !</h1>
</Layout>
```

## React et [Typescript](https://www.typescriptlang.org/)

[Typescript](https://www.typescriptlang.org/) est un langage basé sur Javascript lui ajoutant du typage. C'est un outil puissant, de plus en plus populaire dans la communauté Javascript.

Il est tout à fait possible (et recommandé) d'[utiliser React avec Typescript](https://fr.reactjs.org/docs/static-type-checking.html#typescript).

## [Redux](https://redux.js.org/) ?

Redux est une librairie de gestion d'état qui permet de résoudre le problème de *prop drilling*.
Elle a été très populaire aux débuts de React, mais elle est beaucoup moins appréciée aujourd'hui, notamment par la complexité de son usage.

Mais aussi parcequ'on peut maintenant faire Redux nous-même en combinant `useContext` et `useReducer`.

## [`React.lazy`](https://fr.reactjs.org/docs/code-splitting.html)

[`React.lazy`](https://fr.reactjs.org/docs/code-splitting.html) est une feature assez récente de React, qui permet de charger des composants à la volée, et ainsi les charger uniquement lorsqu'on le décide.

## [Suspense](https://fr.reactjs.org/docs/concurrent-mode-suspense.html#gatsby-focus-wrapper) et le [Concurrent mode](https://fr.reactjs.org/docs/concurrent-mode-adoption.html#gatsby-focus-wrapper)

[Suspense](https://fr.reactjs.org/docs/concurrent-mode-suspense.html#gatsby-focus-wrapper) et le [mode concurrent](https://fr.reactjs.org/docs/concurrent-mode-adoption.html#gatsby-focus-wrapper) sont des features encore expérimentales (ajoutées avec React 18), qui permettent de faire du chargement de données optimisé, notamment grâce aux Server Components.

## À suivre: [Écosystème](./2_ecosystem.md)

# Composant

## Définition

Conceptuellement, **un composant est une fonction, qui, à partir de données, crée des instances de composant**.

```js
const MonComposant = data => instance;
```

En pratique, c'est exactement ça !

```jsx
import React from 'react'; // nous donne accès à la syntaxe JSX

function MonComposant (data) {
  return <div>Youpi</div>;
}

// ou alors
const MonComposant = data => <div>Youpi</div>;
```

> Rappel: pour utiliser le JSX, il est indispensable d'importer `react` dans le fichier concerné. Dans la suite, pour simplifier les exemples, cet import sera implicite.

Un composant peut avoir de la donnée d'entrée, ou pas, selon les besoins.

```jsx
function ComposantSansDonnée() {
  return <div>Coucou</div>
}
```

> Par convention, **les composants doivent être nommés en PascalCase**, c'est-à-dire avec une majuscule en première lettre.

### `import`/`export`

Il est alors possible d'importer ou d'exporter des composants de la manière habituelle, avec les modules esm.

```jsx
// dans le fichier MonComposant.jsx
export function MonComposant() {
  return <div>Youpi</div>;
}

// ailleurs
import { MonComposant } from './MonComposant.jsx'
```

> Vous pouvez définir plusieurs composants par fichier, en exporter autant que vous voulez, notamment via `export default`.

### Valeur de retour

**Un composant doit absolument renvoyer quelque chose**, construit sur composants standards.

```jsx
function ComposantOK () {
  return (
    <article>
      <header></header>
      <main></main>
      <footer></footer>
    </article>
  );
}

function ComposantNul () { // ce composant plantera à l'instanciation
  return undefined;
}
```

De plus, la valeur de retour doit être une unique instance, et non deux instances côte-à-côte.

```jsx
function ComposantNul () { // ce composant ne marche pas
  return (
    <article>
    </article>
    <article>
    </article>
  );
}

function ComposantOK () {
  return (
    <div>
      <article>
      </article>
      <article>
      </article>
    </div>
  );
}
```

Pour éviter de rajouter inutilement des étages dans votre markup, vous pouvez utiliser des [`<Fragment>`](https://fr.reactjs.org/docs/fragments.html#gatsby-focus-wrapper).

```jsx
function ComposantOK () {
  return (
    <>
      <article>
      </article>
      <article>
      </article>
    </>
  );
}
```

## Fonctions pures

Une *fonction pure* est, en informatique, une fonction qui n'a pas d'*effets de bord*, c'est-à-dire de l'influence en dehors d'elle-même.
**Pour les mêmes arguments d'entrée, une fonction pure renverra toujours le même résultat**.

Dans une architecture par composants, on essaie de faire en sorte que les composants soient au maximum des fonctions pures, c'est-à-dire que dans l'idéal, **pour les mêmes données d'entrées, un composant affichera toujours la même UI**.

Il est toutefois indispensable d'avoir dans certains cas des composants *impurs*, notamment lors qu'il s'agit de faire des requêtes au réseau.

---

## TL;DR

- Un composant est une fonction Javascript
- Le nom d'un composant doit commencer par une majuscule
- On peut définir plusieurs composants dans le même fichier
- On peut importer/exporter des composants
- Un composant doit renvoyer un seul element, ou un fragment
- Dans l'idéal, un composant construira toujours la même UI à partir des mêmes données

---

## Exercices

On va faire Poudlard !

1) Modifier le composant `Student` dans le fichier `Student.jsx`, pour qu'il affiche le nom, la date de naissance et l'image.
2) Faire un composant `House` dans un fichier `House.jsx`, qui affiche un nom d'école, une image d'école, ainsi que votre `<Student />`
3) Faire un composant `App` dans un fichier `App.jsx`, qui contient 1 `<House>`
4) Utiliser `<App />` comme composant racine de notre application dans `index.jsx`

---

### à suivre: [Les `props`](./2_props.md)

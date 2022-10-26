# Let's go Pikachu !

On va commencer à manipuler nos premiers composants React.

Tous les exercices de cette formation sont un seul et même projet fil rouge, dont l'objectif est de construire un Pokédex.

Mais avant tout, il faut avoir conscience de l'environnement de travail dans lequel on se trouve.

## Outillage

Notre projet utilise les modules ES6, et nécessite du _bundling_. De plus, on va utiliser la syntaxe JSX. Il nous faut donc un bundler assisté de Babel.

[Plusieurs options sont disponibles](https://reactjs.org/docs/create-a-new-react-app.html), mais par souci de simplicité, on va utiliser [Vite](https://vitejs.dev/guide/), qui va s'occuper de tout.

Le projet est déjà configuré pour travailler avec Vite, avec la commande suivante:
```bash
npm create vite@latest my-cool-app -- --template react
```

A minima, pour utiliser React avec NPM, il faut avoir installé `react` (React lui-même) et `react-dom` (le DOM virtuel). Grâce à Vite, ces dépendances sont déjà prévues dans le `package.json`.

```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
},
```

Il ne reste qu'à les installer, avec la commande suivante, à la racine du projet.

```bash
npm i # à la racine du projet
```

> Pour installer React sur un projet NPM existant, vous pouvez utiliser `npm i react react-dom`.

Une fois que tout s'est bien passé, on peut lancer les outils de développement prévus par Vite.

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

Dans votre console, lancer:

```bash
npm run dev # démarre le serveur de développement
```

## Application minimale

> Ouvrir le fichier `src/index.jsx`

```jsx
import React from 'react'; // les composants, ainsi que la syntaxe JSX
import ReactDOM from 'react-dom'; // DOM virtuel

const pokemon = <div>Pikachu</div>;

ReactDOM.render(pokemon, document.getElementById('root'));
```

Dans cet exemple, on fait 3 choses:

- on importe React et le DOM virtuel
- on instancie un composant standard simple, avec un peu de contenu
- on crée un rendu de cette instance à l'endroit désigné de notre page web

**`ReactDOM.render(instance, element)` permet d'initialiser notre application avec une `instance`, la racine de notre application, en remplacement d'un `element` HTML déjà présent sur la page**.

À partir de ce moment, le DOM virtuel est en place, et va gérer les mises à jour d'interface. `ReactDOM` ne sera nécessaire nulle part ailleurs.

Ici, notre élément HTML est fourni par `document.getElementById('root')`, mais n'importe quel élément présent sur notre page initialement peut convenir.

Dans notre cas, le fichier HTML se trouve à `public/index.html`. On y retrouve:

```html
<div id="root">Dragon Ball</div>
```

Cet élément sera écrasé intégralement par notre application React.

_Create-React-App impose un système de fichiers particulier, et discutable, notamment les dossiers `src` et `public`. Il est tout à fait possible d'utiliser React sans CRA, et dans ce cas ces contraintes de dossiers ne s'appliquent plus._

## TL;DR

- Un environnement de développement est nécessaire pour travailler avec React
- [Create-React-App](https://create-react-app.dev/) fait le nécessaire, mais il y a d'autres alternatives
- Pour créer une application minimale, il faut importer `React` et `ReactDOM`, et initialiser notre application à un endroit du DOM

## Exercices

### Composants standard

1. > Donner une classe 'name' au `<div>`

2. > Mettre le `<div>` dans un `<li>`, et donner au `<li>` une classe 'Pokemon'

3. > Rajouter une `<div>` affichant le poids du pokémon

4. > Ajouter un listener au clic sur le `<li>` permettant d'afficher le nom du Pokémon dans la console quand on clique dessus

- Utiliser `console.log()`

5. > Ajouter un 2e pokemon, en dupliquant le code du premier, et mettre les 2 dans un `<ul>`

6. > Ajouter un `<div>` en frère du `<ul>`. Ce `<div>` représente le dresseur de Pokémons et doit avoir un classe `Trainer`. Il doit afficher un `name` et une `address`. Le `div` et le `ul` doivent avoir un parent commun

### Composants personnalisés

7. > Importer dans le fichier `index.jsx` le composant `Pokemon` depuis son fichier

8. > Utiliser ce composant pour afficher les pokemons, en leur passant les données `name` et `weight` en "attribut"

---

### À suivre: [Les composants](../2_component/index.md)

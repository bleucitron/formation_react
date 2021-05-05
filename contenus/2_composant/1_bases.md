# Le composant classe de base

**Un composant est une fonction, qui, à partir de données, crée des instances de composant**.

```js
const MonComposant = data => instance;
```

Historiquement, **les composants React sont généralement des classes Javascript**. En Javascript, les classes sont en fait des fonctions particulières, qui se rapprochent des classes au sens de la Programmation Orientée Objet.

On verra plus tard qu'il y a une autre manière de définir des composants React.

```jsx
class MonComposant extends React.Component {
  render() {
    return <div>Youpi</div>;
  }
}
```

Un composant hérite de `React.Component`, c'est à dire qu'il profite de toutes les caractéristiques qui définissent un `React.Component`.

## Le rendu

Il possède notamment une méthode `render()`, qui est la clé de voute du fonctionnement de React.

**La méthode `render()` permet la mise à jour de l'instance du composant**. Elle est exécutée automatiquement à chaque fois que l'instance reçoit des nouvelles données.

SCHÉMA PROPAGATION RENDER

Dès qu'une instance appelle `render()`, elle se met à jour, puis demande à ses enfants de se mettre à jour, en leur fournissant à nouveau de la donnée, qui ne peut pas avoir changé. Que la donnée ait changé ou pas, **lorsqu'un parent appelle `render()`, tous ses enfants appellent leur `render()` également**. En revanche, les "cousins" ne seront pas mis à jour.

## Les `props`

Jusque là, on a parlé de "données", d'"attributs". En réalité, on parle de **`props`**. Ces `props` sont l'ADN du composant:

- **un composant reçoit ses props de son parent**
- **un composant ne peut pas changer ses props**

En JSX, lorsque l'on passe des "attributs" à une instance de composant, on lui passe en réalité des props. On ne parle jamais d'attributs en React. J'ai utilisé le terme jusque là pour aider à la compréhension de la syntaxe JSX.

```jsx
<Pokemon name="Pikachu" weight={40} /> // name et weight sont fournis en props
```

À l'intérieur d'un composant, **on peut toujours accéder aux props via `this.props`**. `this` représente l'instance du composant.

**Les `props` sont un objet**, on peut accéder à chacune des `props` via `this.props.leNomDeLaProps`.

```jsx
class MonComposant extends React.Component {
  render() {
    return (
      <div>
        <div>Youpi, je m'appelle {this.props.name} !</div>
        <div>J'ai {this.props.age} ans.</div>
      </div>
    );
  }
}
```

Souvent, on se sert du destructuring pour simplifier l'accès aux `props`. Cela permet d'éviter d'écrire `this.props.` en permanence.

```js
const { name, weight } = this.props;
```

On peut toujours essayer de changer les props à l'intérieur d'un composant, mais ça déclenchera aucune mise à jour, et va créer de la confusion. Il ne faut donc jamais le faire.

Un composant ne peut pas changer ses props, **il se contente de les consommer**.

### La `prop` `key`

Lorsque plusieurs instances sont fournies dans un tableau, React risque de les mélanger si on l'aide pas. Il a besoin d'identifier chaque instance du tableau de manière unique afin de s'assurer de sa position.

On utilise alors une `props` spéciale: `key`. Dans l'idéal, pour une même instance, la `key` ne doit pas changer entre différents rendus. Souvent, ces tableaux sont construits à partir de données, qui possèdent un `id` unique. Ce genre d'`id` est parfait pour la `key` dont React a besoin.

```jsx
class MonComposant extends React.Component {
  render() {
    const pals = [
      <div key="romain">Romain</div>,
      <div key="elie">Élie</div>,
      <div key="maggie">Maggie</div>,
    ];

    return <div>{pals}</div>;
  }
}
```

## TL;DR

- Un composant est une classe Javascript
- Un composant a toujours une méthode `render()`
- `render()` est appelée à chaque mise à jour du composant
- Un composant qui appelle son `render()` déclenche automatiquement le `render()` de tous ses enfants
- Les `props` sont l'ADN d'un composant
  - il les reçoit comme données de son parent
  - il ne peut pas les changer, il ne peut que les consommer
- On accède aux `props` via `this.props`, qui renvoie un objet
- Lorsqu'on affiche plusieurs instances dans un tableau, il faut fournir une `key` unique par élément

## Exercices

1. > Créer un composant `Trainer` dans un fichier `Trainer.jsx`. Il doit recevoir comme `props` un `name` et une `address`, et les afficher à l'écran

2. > Utiliser ce composant à la place du `<div className='Trainer'>` existant

3. > Créer un composant `App` dans un fichier `App.jsx`. Ce composant devient la racine de notre application.

- `App` affiche tous les `<Pokemon>` dans un `<ul>`, ainsi que le `<Trainer>`
- C'est lui que `ReactDOM.render` utilise

4. > Modifier `App` pour qu'il accepte `data` en `props`. Il doit la recevoir de `index.jsx`

- Vous pouvez importer la donnée dans `index.jsx` avec `import data from './_data/pokemon.json';`
- `App` crée une liste de `<Pokemon>` à partir de la liste fournie par sa `props` `data`
- Chaque `<Pokemon>` reçoit 3 `props`: `name`, `weight`, et `src` qui est l'image du Pokémon (`pokemon.sprites.front_default`)

5. > Créer un composant `PokemonList`, qui prend une liste de Pokémons `pokemons` en `props`, et affiche tous les `<Pokemon>`

6. > Utiliser `<PokemonList>` à la place du `<ul>` existant dans `<App>`

7. > Créer un composant `TrainedPokemon` sur la base de `Pokemon`.

- Les `<TrainedPokemon>` sont les Pokémons que le dresseur a attrapé, tandis que les `<Pokemon>` sont tous les Pokemons existants

8. > Faire en sorte que le `<Trainer>` affiche le premier Pokémon en tant que `<TrainedPokemon>`, qui est son premier Pokémon

## à suivre: [`State`](./2_state.md)

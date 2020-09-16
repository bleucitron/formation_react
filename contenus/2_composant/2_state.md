# Le `state`

Jusque là, les composants que l'on écrit sont tous _statiques_, dans le sens où ils n'évoluent jamais.

On a vu qu'un composant avait de la donnée, les `props`, mais ces `props` ne sont pas modifiables par le composant.

**Pour faire évoluer un composant, il faut passer par le `state`**.

Le `state` est une autre forme de donnée dont se servent les composants. À la différence des `props`, un composant peut faire évoluer son `state`. Il est comme l'expérience d'un composant, il évolue au fur et à mesure des évènements de la vie d'un composant.

Un composant possédant du state est dit **stateful**, à la différence des composants sans `state`, dits **stateless**.

**Le `state` est local à chaque instance de composant**. Aucune autre instance de composant ne peut savoir si les autres instances sont stateful ou non. De même, le `state` d'une instance ne peut jamais être accessible de l'extérieur. Éventuellement, il peut être redistribué aux enfants sous forme de `props`.

**La mise à jour du `state` provoque l'exécution de la méthode `render()`**, et donc également les rendus de tous les enfants.

Deux situations provoquent donc l'exécution de `render()`:

- la réception de `props`
- la mise à jour du `state`

## Initialiser le `state`

En général, il est recommandé d'initialiser le `state`. Ce n'est toutefois pas strictement nécessaire.

Pour l'initialiser, il faut passer par la méthode `constructor()`. La méthode `constructor()` n'est pas liée à React, mais aux classes Javascript. Elle est exécutée une seule fois à la création de chaque instance. Elle permet notamment d'initialiser des variables, et de profiter de l'héritage de classe, via `super()`.

Dans le cas de React, **`constructor()` sert à initialiser le `state`**.

```jsx
class MonComposant extends React.Component {
  constructor() {
    super(); // nécessaire pour l'héritage de classe

    // initialisation du state
    this.state = {
      age: 0,
      nickname: "bébé 'tin",
    };
  }

  render() {}
}
```

Comme les `props`, le `state` est un objet, et peut contenir autant de champs que l'on veut. On accède à chaque `state` via `this.state.`. De même que pour les `props`, le `state` est accessible partout dans le composant.

```jsx
  render() {
    const { age, nickname } = this.state;

    return <div>{nickname} {age}</div>;
  }
```

## Mettre à jour le `state`

**Pour changer le `state`, il faut utiliser la méthode `this.setState()`**. Utiliser `this.setState()` provoque 2 choses:

- la mise à jour de l'objet `this.state`
- le déclenchement de `render()`

**Il ne faut pas changer le `state` directement**, car `render()` ne sera pas appelé.

```js
// écrire ceci pour faire évoluer le state ne déclenchera pas de rendu
this.state = {
  age: 2,
};
```

On passe à `setState()` un objet qui représente les changements que l'on souhaite appliquer au `state`. **On peut modifier le `state` morceau par morceau**, ou en intégralité. Dans tous les cas, ils seront intégrés au `state` complet du composant.

```js
// à l'initialisation
this.state = {
  age: 0,
  nickname: "bébé 'tin",
};

// ailleurs
this.setState({
  age: 10, // ici, on ne change que this.state.age, le nickname reste le même
});
```

En général, on change le `state` via les évènements du DOM.

```jsx
  render() {
    const { age } = this.state;

    function avoir10ans() {
      this.setState({age: 10});
    }

    return <div onClick={avoir10ans}>{age}</div>; // avoir10ans() sera exécutée au clic
  }
```

Attention ! Ne pas mettre à jour le `state` directement dans `render()`.

## Le problème de `this`

L'exemple ci-dessus n'est pas optimal. En effet, `avoir10ans` est définie dans `render()`, ce qui signifie qu'elle redéfinie à chaque rendu, ce qui n'est pas nécessaire et consomme des ressources du navigateur inutilement.

Un composant étant une classe Javascript, il est possible de lui définir des méthodes personnalisées. Par exemple, `render()` est une méthode personnalisée fournie par React, qui a un rôle très spécifique.

Mais il est possible de créer ses propres méthodes personnalisées. Elles sont alors accessible via `this.`. Alors la méthode n'est définie qu'une seule fois, lorsque le composant est défini.

```jsx
class MonComposant extends React.Component {
  constructor() {}

  avoir10ans() {
    this.setState({ age: 10 });
  }

  render() {
    return <div onClick={this.avoir10ans}>{age}</div>;
  }
}
```

L'exemple ci-dessus va générer un bug au clic: `Cannot read 'setState' of undefined`. Lorsque l'on va cliquer, on va appeler `this.avoir10ans()`, qui utilise `this.setState()`. Mais on reçoit une erreur qui nous informe que `this` est `undefined`.

Ce problème, très classique, n'est pas lié à React, mais à [la façon dont `this` fonctionne en Javascript](https://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/).

`this` décrit le contexte courant. Mais en Javascript il est défini au moment de l'exécution, et non de la définition de la fonction qui l'utilise. Dans le cas de composants React, lorsqu'ils appellent une méthode personnalisée, `this` n'est pas défini.

C'est cette spécificité de Javascript qui génère ce problème en React. Pour le résoudre, **il faut forcer la valeur de `this` au moment de la définition de la méthode**.

On fait ça en _bindant_ la méthode concernée dans le constructor.

```jsx
class MonComposant extends React.Component {
  constructor() {
    this.avoir10ans = this.avoir10ans.bind(this);
  }

  avoir10ans() {
    this.setState({ age: 10 });
  }

  render() {
    return <div onClick={this.avoir10ans}>{age}</div>;
  }
}
```

Ainsi, lorsque `avoir10ans()` s'exécutera, `this` ne sera pas `undefined`, mais fera bien référence au composant. Ce qui permettra d'avoir accès normalement à `this.setState()`, `this.props`, `this.state`, ...

Une autre façon de résoudre le problème est d'utiliser une fonction fléchée.

```jsx
class MonComposant extends React.Component {
  constructor() {}

  avoir10ans() {
    this.setState({ age: 10 });
  }

  render() {
    return <div onClick={() => this.avoir10ans()}>{age}</div>; // pas de problème lié à this
  }
}
```

**Utiliser une fonction fléchée permet d'éviter le problème du `this`**, car les fonctions fléchées utilisent le `this` défini lors de leur création. Il faut toutefois avoir conscience que dans ce cas, on crée une nouvelle fonction fléchée à chaque rendu, ce qui peut être nécessaire.

## Procuration

On a vu que le `state` est local à chaque composant. Il ne peut pas en sortir. Il peut éventuellement être transmis à un enfant en tant que `props`, mais sans que l'enfant ne soit conscient que cette `props` vient du `state` de son parent.

Il n'est donc pas possible à un composant d'avoir accès au `state` d'un autre composant, et encore moins de le modifier.

Chaque composant est le seul responsable de son `state`.

**Un composant peut néanmoins donner procuration à ses enfants pour qu'ils puissent agir sur le `state`**. Le parent donne explicitement le droit à son enfant de modifier son `state`.
Le parent fournit alors une fonction en tant que `props`, que l'enfant pourra exécuter, sans qu'il soit conscient de ce que cette fonction fait.

```jsx
class Parent extends React.Component {
  enerver() {
    const { enervement } = this.state;
    this.setState({ enervement: enervement + 1000 });
  }

  render() {
    return <Enfant crier={this.enerver} />;
  }
}

class Enfant extends React.Component {
  render() {
    return <div onClick={this.props.crier}>Romain</div>;
  }
}
```

## La zone d'influence du `state`

Le state appartient à un composant, et ne peut en sortir. Mais il concerne tout de même potentiellement tous les descendants du composant.

En effet, on a vu que l'on pouvait redescendre le `state` dans les enfants en tant que `props`. Les enfants n'ont alors pas conscience que leur `props` vient du `state` du parent. On peut alors parler de _zone d'influence du `state`_.

En revanche, il n'est pas possible de remonter le `state` au dessus du composant qui le définit, ou à des composants "neveux" ou "nièces". On ne peut pas utiliser un `state` en dehors de sa zone d'influence.

Si un `state` a besoin d'être fourni à des composants qui ne font pas partie de la descendance du composant, alors le `state` est mal placé.

**Le `state` doit être placé sur le plus proche ancêtre commun à tous les composants qui le nécessitent**.

## TL;DR

- Le `state` permet de faire évoluer un composant
- Le `state` reste au sein de l'instance, il ne peut en sortir
- On accède au `state` via `this.state`, qui renvoie un objet
- On initialise le `state` dans `constructor()`
- On change le `state` via la méthode `this.setState()`, qui déclenche `render()`
- On peut changer le `state` morceau par morceau.
- Chaque méthode personnalisée qui utilise `this` a besoin d'être bindée dans le `constructor()`
- Un composant peut donner procuration à ses enfants pour modifier son `state`
- Le `state` doit être placé sur le plus proche ancêtre commun à tous les composants qui le nécessitent

## Exercices

1. > Faire une méthode de classe de la fonction `displayName` de `Pokemon`

2. > Ajouter un `state` au composant `TrainedPokemon`, qui représente son expérience

3. > Afficher l'expérience du `<TrainedPokemon>`

4. > Au `mousemove` sur un `<TrainedPokemon>`, faire évoluer son `state` pour lui donner l'expérience

5. > Créer un composant `<Filters>` affichant un `<button>` permettant d'afficher seulement les `<Pokemon>` de `<PokemonList>` de type `electric`

- Bien réfléchir à l'endroit où doit être défini le `state` correspondant
- On doit pouvoir réafficher tous les `<Pokemon>` en recliquant dessus
- Utiliser `pokemon.types.find()` pour vérifier si un Pokémon possède un type

6. > Styliser le `<button>` en fonction de si le filtre est actif ou non

## à suivre: [`Cycle de vie`](./3_cycle_de_vie.md)

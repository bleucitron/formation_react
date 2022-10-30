# Extras

## Composants stateless fonctionnels

Dans de très nombreux cas, les composants sont stateless et n'utilisent pas de méthodes de cycle de vie autres que `render()`.

```jsx
class UnComposantClassique extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
```

Un tel composant est une classe qui n'utilise qu'une seule de ses méthodes, `render()`.

On peut alors définir le même composant de manière plus simple, en utilisant l'écriture fonctionnelle.

```jsx
function UnComposantClassique(props) {
  return <div>{props.name}</div>;
}
```

**Un tel composant est alors une simple fonction, il est réduit à sa propre fonction `render()`**. Dans ce cas, on ne peut plus accéder à `this.props`, puisqu'on ne travaille plus dans une classe. À la place, les `props` sont accessibles via l'argument de la fonction, qu'on appelle généralement `props`, ou `p`.

## `setState()` est asynchrone

On a vu que `setState()` déclenche un rendu. Mais en réalité, chaque `setState()` ne déclenche pas systématiquement un rendu correspondant.

En effet, pour éviter de rafraîchir inutilement la page, React effectue des _batchs_ de mises à jour. **Si beaucoup de `setState()` sont demandés en peu de temps, React les cumule, et les effectue tous d'un coup**, dans le bon ordre, lorsqu'il estime que c'est nécessaire.

On dit que `setState()` est asynchrone.

Cette nuance est importante dans les cas où on demande une mise à jour d'un `state` en fonction de la valeur précédente de `state`. En effet, puisque les mises à jour sont asynchrones, il est possible que la valeur précédente du state ne soit pas celle que l'on croit, dans des cas de mises à jour fréquentes.

```js
this.setState({
  age: this.state.age + 1, // on peut avoir des surprises
});
```

### Méthode fonctionnelle

Dans les cas où une mise à jour de `state` implique un `state` précédent, **on peut utiliser l'écriture fonctionnelle de `setState()`**.

On passe à `setState()` non plus le nouvel objet représentant le `state`, mais une fonction: `prevState => newState`.
Cette fonction sera appelée par React au moment de la mise à jour effective du React, et nous garantit que `prevState` sera la bonne valeur du `state` à ce moment.

Si plusieurs mises à jour sont fonctionnelles, elles seront bien sûr effectuées dans le bon ordre.

```js
this.setState(state => ({ age: state.age + 1 })); // state est le state juste précédent, ce qui garantit la bonne valeur de age
```

## Optimisations

Lors d'un rendu, tous les enfants d'un composants sont également rendus, même si leurs `props` n'ont pas changé.
Dans le cas de grosses applications, cela peut poser des problèmes de performances.

### [`shouldComponentUpdate()`](https://fr.reactjs.org/docs/react-component.html#shouldcomponentupdate)

**La méthode React `shouldComponentUpdate()` permet de décider si un rendu est nécessaire ou non**.
Cette méthode est exécutée juste avant `render()`, et permet de comparer les `props` et `state` juste précédents aux `props` et `state` actuels.

Si `shouldComponentUpdate()` renvoie `true`, alors l'instance sera mise à jour. Sinon, elle ne le sera pas.

```js
shouldComponentUpdate(nextProps, nextState) {
  if (nextProps.age !== this.props.age) // on compage l'âge précédent à l'âge actuel
    return true; // l'instance sera mise à jour
  else
    return false; // l'instance ne sera pas mise à jour
}
```

### [`PureComponent`](https://fr.reactjs.org/docs/react-api.html#reactpurecomponent)

Si on est certain que notre composant est _pur_, c'est à dire que pour une valeur de `props` ou `state` donnée, il renvoie toujours la même UI, alors il est possible d'avoir une optimisation par défaut.

Au lieu d'utiliser `extends React.Component`, **on peut utiliser `extends React.PureComponent`, qui implémente par défaut la méthode `shouldComponentUpdate()` sur toutes les `props` et `state` de premier niveau**.

Dans ce cas, on dit que `shouldComponentUpdate()` effectue une comparaison de surface, car elle ne va pas vérifier les éventuelles valeurs plus profondes de `props` ou de `state`.

```js
class MonComposant extends React.PureComponent {
  render() {}
}
```

### [`React.memo`](https://fr.reactjs.org/docs/react-api.html#reactmemo)

Lorsque l'on utilise des composants fonctionnels, on a n'accès ni à `shouldComponentUpdate()`, ni à `extends PureComponent`. Pour pouvoir profiter du même genre d'optimisation permettant de ne pas faire de rendu si les `props` n'ont pas changé, on peut définir un composant fonctionnel avec `React.memo`.

```jsx
function MyComponent(props) {
  return <div>{props.name}</div>;
}

const MyOptimizedComponent = React.memo(MyComponent);
```

## [Formulaires](https://fr.reactjs.org/docs/forms.html)

Les formulaires sont un cas à part car ils possèdent un `state` interne naturel, indépendant de React et maintenu par le DOM lui-même.

### [Formulaires non controlés](https://fr.reactjs.org/docs/uncontrolled-components.html)

Il est tout à fait possible de travailler avec des formulaires en React en laissant le DOM gérer comme d'habitude l'état de chacun des différents inputs. On appelle ça des formulaires _non controlés_.

Mais de manière générale, en React, il est recommandé de pas venir lire ou changer le DOM directement. On préfère laisser le DOM virtuel s'en charger.

### [Formulaires controlés](https://fr.reactjs.org/docs/forms.html)

Dans le cas des formulaires, on appelle ça utiliser des formulaires _controlés_. **L'état interne d'un input va être en permanence contrôllé par le `state` d'un composant**. Cela permet d'avoir accès facilement et en permanence aux valeurs des inputs, sans requêter le DOM, et facilite notamment la validation de formulaire.

À chaque mise à jour interne de l'input (en général `onChange`), on va mettre à jour le `state` du composant, pour redescendre sa valeur en tant que `value` de l'input.

```js
class MonInput extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      value: '',
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return <input value={this.state.value} onChange={this.updateValue} />;
  }
}
```

Ce schéma peut paraître curieux ou inhabituel, mais il est recommandé quand on utilise des formulaire en React.

Plus d'informations sur [les différences entre formulaires contrôlés et non contrôlés](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/).

## [Refs](https://fr.reactjs.org/docs/refs-and-the-dom.html)

De manière générale, il est dangereux ou contre-productif de chercher à manipuler le DOM directement dans une application React. Ça implique souvent de "tordre" les principes de React, et peut mener à des comportements imprévus.

Il y a tout de même des cas particuliers où manipuler le DOM directement est nécessaire, notamment pour les calculs de dimensions, ou la gestion du focus. Pour ce genre de cas, plutôt que d'utiliser les APIs DOM classiques, React fournit un moyen simple d'accéder au DOM: les `refs`.

On va pas traiter ces cas dans cette formation, mais n'hésitez pas à vous renseigner sur le sujet.

## [Contexte](https://fr.reactjs.org/docs/context.html)

On va que les données en React avaient un flux descendant: du parent vers les enfants. Toutes les données externes, les `props` d'un enfant sont fournies par le parents. Ce qui implique parfois de faire transiter de la donnée sur plusieurs niveaux de composants.

React fournit l'API Contexte pour définir de la donnée "globale" accessible à tous les composants, et éviter trop de relais entre composants.

Néanmoins, en général cette API n'est pas nécessaire et il facile de mal l'utiliser. Il est recommandé d'éviter de s'en servir.

On va pas traiter ce cas dans cette formation, mais n'hésitez pas à vous renseigner sur le sujet.

_Des librairies de gestion d'état comme Redux permettent de résoudre ce problème de relais de données sur de nombreux niveaux de profondeurs_.

## TL;DR

- Les composants simples peuvent s'écrire sous forme de fonction
- Les mises à jour de `state` sont effectuées par paquet
- Si une mise à jour dépend d'un `state` précédent, il est recommandé d'utiliser la méthode fonctionnelle
- Les formulaires en React sont en général controlés, c'est-à-dire que le comportement est entièrement dicté par React
- On peut utiliser des `refs` pour manipuler le DOM directement, mais il faut plutôt éviter
- On peut utiliser le Contexte pour définir des données globales, mais il faut plutôt éviter

## Exercices

1. > Utiliser des composants fonctionnels lorsque c'est possible et pertinent
2. > Utiliser des `setState()` fonctionnels lorsque c'est possible et pertinent
3. > Utiliser des optimisations lorsque c'est possible et pertinent
4. > Utiliser un `input` pour donner un surnom modifiable à chaque `<TrainedPokemon>`

## À suivre: [Les Hooks](../3_hooks/1_classes_suck.md)

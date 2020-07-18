# Hooks Principaux

## [`useState()`](https://fr.reactjs.org/docs/hooks-reference.html#usestate)

**`useState()` permet d'utiliser du `state`** sans composant classe.

```js
const [age, setAge] = useState(0);
```

`age` est une variable de `state`, `setAge` est la méthode permettant de modifier ce morceau d'état, tandis que `0` est la valeur initiale de `age`.

`age` et `setAge` ne sont que des noms de variable, que l'on peut choisir comme on veut. La seule chose importante est que le premier argument représente la variable d'état, et la deuxième variable représente la méthode pour la faire évoluer.

_On utilise le concept de destructuring sur une liste_.

```js
import React, { useState } from 'react';

function Personne() {
  const [age, setAge] = useState(0);

  return <div onClick={() => setAge(1)}>{age}</div>;
}
```

Comme pour `setState()`, les mises à jour d'état peuvent être asynchrones, et il peut être nécessaire d'utiliser une mise à jour fonctionnelle lorsque le nouvel état dépend du précédent.

```js
import React, { useState } from 'react';

function Personne() {
  const [age, setAge] = useState(0);

  return <div onClick={() => setAge(prevAge => prevAge + 1)}>{age}</div>;
}
```

**On peut définir plusieurs `state` de manière indépendante**.

```js
import React, { useState } from 'react';

function Personne() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Romain');

  return (
    <div onClick={() => setAge(1)} onMouseEnter={() => setName('Paul')}>
      {age}
      {name}
    </div>
  );
}
```

## [`useEffect()`](https://fr.reactjs.org/docs/hooks-reference.html#useeffect)

**`useEffect()` permet de réagir aux différentes mises à jour de `props` ou de `state`**.

Différents cycles de vie sont concernés par `useEffect()`:

- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

### `componentDidUpdate()`

```js
useEffect(() => {
  console.log('COUCOU'); // sera exécutée à chaque rendu
});
```

`useEffect()` prend 2 arguments:

- une fonction
- une éventuelle liste de variables

```js
useEffect(() => {
  console.log('COUCOU'); // ne sera exécutée que lorsque a ou b change
}, [a, b]);
```

### `componentDidMount()`

**Si le 2e argument est une liste vide, alors la fonction ne sera exécutée qu'après le premier rendu**.

```js
useEffect(() => {
  console.log('Premier rendu fait'); // ne sera exécutée qu'après le premier rendu
}, []);
```

### `componentWillUnmount()`

**Si la fonction du hook renvoie une fonction, cette dernière sera exécutée juste avant le démontage du composant**.

```js
useEffect(() => {
  console.log('Premier rendu fait'); // ne sera exécutée qu'après le premier rendu

  return () => console.log('Je vais être supprimé'); // ne sera exécutée qu'avant le démontage du composant
}, []);
```

## [Règles des hooks](https://fr.reactjs.org/docs/hooks-rules.html)

**Il faut impérativement utiliser les hooks à la racine de notre composant**, pas à l'intérieur de conditions ou de fonctions imbriquées.

L'ordre dans lequel on définit des hooks n'est pas important, mais il doit rester le même tout au long de la vie du composant, pour que React ne se perde pas.

Cela se concrétise par le principe suivant: toujours exécuter les mêmes hooks dans le même ordre quoi qu'il arrive.

Il est en revanche tout à fait acceptable d'intégrer un `if` à l'intérieur d'un hook.

```js
import React, { useState } from 'react';

function Personne() {
  const [age, setAge] = useState(0);

  if (age > 10) {
    // si ce code n'est pas exécuté, React va mélanger les hooks
    useEffect(() => {
      console.log('je suis grand !');
    });
  }

  useEffect(() => {
    if (age > 20) console.log('je suis grand !'); // ceci ne pose pas de souci
  });

  const [weight, setWeight] = useState(5);

  return <div></div>;
}
```

**Il faut impérativement utiliser un hook depuis un composant React fonctionnel**. Pas depuis un composant classe, ou d'autres fonctions non React.

##

## TL;DR

- `useState()` permet d'utiliser du `state`
- `useEffect()` permet de réagir aux différentes évolutions de `props` ou `state`
- Il faut utiliser les hooks à la racine d'un composant
- Il faut utiliser les hooks dans une fonction React

## Exercices

1. > Reprendre tous les composants stateful pour les transformer en composants fonctionnels avec hooks

## À suivre: [Autres hooks](./3_autres_hooks.md)

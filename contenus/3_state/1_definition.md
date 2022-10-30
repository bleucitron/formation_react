# L'état

Jusque là, nos composants sont assez peu intéressants. Certes, ils permettent de définir des *templates* pour simplifier répliquer une structure HTML, mais ils restent _statiques_, dans le sens où ils n'évoluent jamais.

On a vu qu'un composant avait de la donnée, les `props`, mais ces `props` ne sont pas modifiables par le composant, et ne peuvent pas donc pas servir à faire évoluer un composant.

Mais les composants disposent d'un outil spécifiquement dédié à leur mise à jour: le `state`.

**Pour faire évoluer un composant, il faut obligatoirement passer par le `state`**.

## Définition

Le `state` est une autre forme de donnée dont se servent les composants. À la différence des `props`, un composant peut faire évoluer son `state`. Il est comme l'expérience d'un composant, il évolue au fur et à mesure des évènements de la vie de l'instance du composant.

Un composant possédant du state est dit **stateful**, à la différence des composants sans `state`, dits **stateless**.

**Le `state` est local à chaque instance de composant**. Aucune autre instance de composant ne peut savoir si les autres instances sont stateful ou non. De même, le `state` d'une instance ne peut jamais être accessible de l'extérieur. Éventuellement, il peut être redistribué aux enfants sous forme de `props`.

**La mise à jour du `state` déclenche le `render` sur la branche de composants concernés**, et donc également les rendus de tous les enfants.

Autrement dit, deux situations provoquent donc le `render`:
- la réception de `props`
- la mise à jour du `state`

## Déclaration de l'état

Pour pouvoir utiliser du `state`, il faut utiliser le hook `setState`, qui s'importe depuis `react`.

> On verra un peu plus tard ce qu'est un hook.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return <div>{count}</div> // on affiche l'état actuel de count
}
```

`useState` est un peu particulier à utiliser. **`useState` est une fonction qui renvoie un tableau**, contenant 2 éléments:
- le premier est la valeur actuelle de l'état
- le second est la fonction permettant de mettre à jour cet état

```jsx
const [etat, fonctionDeMiseAJour] = useState(valeurInitiale); // on profite en général de la déstructuration des tableaux pour accéder aux 2 éléments.
```

Les noms choisis pour les 2 éléments importent peu (ici on a choisi `count` et `setCount`), mais il y a une convention de nommer la fonction de mise à jour avec un préfixe `set` puis le nom choisi pour l'état.

> Par exemple: `age` => `setAge`, `name` => `setName`.

Il est possible (et recommandé) d'initialiser l'état avec une valeur initiale, que l'on passe en argument de `useState`.

> Il est impératif d'utiliser `useState` dans la fonction d'un composant React.

## Plusieurs états

Il est possible, et souvent nécessaire, d'avoir plusieurs états dans le même composant. Il suffit d'utiliser plusieurs fois `useState`.

```jsx
import React, { useState } from 'react';

function Potager() {
  const [name, setName] = useState('Le potager de Romain');
  const [carottes, setCarottes] = useState(4);
  const [patates, setPatates] = useState(7);

  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <li>{carottes}</li>
        <li>{patates}</li>
      </ul>
    </div>
  );
}
```

Il est possible de définir plusieurs états dans un objet, mais c'est en général déconseillé, à moins que les données aient du sens ensemble.

```jsx
// Ne faites pas ça
const [potager, setPotager] = useState({
  carottes: 4,
  patates: 7,
  navets: 5
});

// Dans ce cas c'est pertinent
const [coords, setCoords] = useState({
  lat: 44.8637178,
  lon: -0.586012
});
```

---

## TL;DR

- Le `state` est un deuxième type de données appartenant à un composant
- Le `state` permet de faire évoluer l'état d'un composant
- Le `state` est local à chaque instance
- Déclarer un `state` se fait avec la fonction `useState`
- `useState` nous renvoie l'état courant du `state`, ainsi qu'une fonction pour le modifier, le tout dans un tableau
- On peut définir plusieurs états dans un composant en utilisant plusieurs fois `useState`
- Groupez plusieurs états dans un objet lorsque les valeurs ont du sens ensemble

---

## Exercices

1) Donner une expérience `exp` au composant `Student`, l'initialiser à `0`
2) Donner un état `open` au composant `House`, l'initialiser à `false`

---

### à suivre: [Mettre à jour l'état](./2_setState.md)

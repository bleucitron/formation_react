## Valeurs et variables

### Une variable est un câble

Une variable part d'un label et va vers une valeur.

```js
let x = 10;
let y = x;
x = 0; // y reste à 10
```

### Une variable ne pointe jamais vers une autre variable

### Les valeurs flottent autour de notre code

Les valeurs sont un peu comme des étoiles qui gravitent autour de notre code. Notre code ne fait qu'y faire référence, via des variables.

## Tableaux

Il est souvent plus facile d'utiliser les méthodes fonctionnelles des tableaux pour les manipuler.

```js
const tableau = [1, 2, 3];

// boucle sur le tableau
tableau.forEach(e => {
  console.log('Valeur', e);
});

// crée un nouveau tableau
const nouveauTableau = tableau.map(e => {
  return e + 10;
}); // [11, 12, 13]

// crée un nouveau tableau filtré
const nouveauTableauFiltre = tableau.filter(e => {
  return e >= 2;
}); // [2, 3]

// trouve l'élément qui correspond et le renvoie
const element = tableau.find(e => {
  return e === 2;
}); // 2
```

## ES6+

### Const et Let

Ne pas utiliser `var`.

### Destructuring

```js
const o = { a: 1, b: 2, c: 3 };

const { a, b, c } = o;
const { a, ...leReste } = o;

const l = [4, 5, 6];

const [x, y, z] = l;
const [x, ...leReste] = l;
```

### Spread

```js
const copie = { ...o };
const copieAugmentée = { ...o, d: 4 };

const copie = [...o];
const copieAugmentée = [...o, 4];
```

### Arrow functions

```js
() => 1;

x => x + 1;

(x, y) => x + y;

x => {
  console.log('COUCOU');
  return x + 102;
};

x => ({ a: x + 1 });
```

## Asynchrone

Les Promesses permettent d'avoir une API simple et complète pour utiliser les comportement asynchrones de Javascript.

```js
const p = fetch(...)
  .then(result => console.log(result))
  .catch(e => console.log(e));

const allPs = Promise.all([...]).then(...);
```

On peut aussi utiliser la syntaxe `async`/`await` pour consommer des promesses.

```js
async function getData() {
  const myData = await fetch(...);
  return myData;
}
```

## Modules

```js
import monDefaut, { a, b } from 'mon-module';

export default function () {}
```

## à suivre: [React](../1_introduction/1_origines.md)

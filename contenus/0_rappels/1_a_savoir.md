# Rappels

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

**Ne pas utiliser `var`.**

Utiliser `let` pour les variables qui changent.

Utiliser `const` pour les variables qui ne changent pas.

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

## Récupérer de la donnée

On peut aller chercher de la donnée sur le réseau grâce à `fetch`, qui nous crée une Promesse:

```js
const p = fetch(...)
  .then(response => response.json())
  .then(data => console.log('data', data))
  .catch(e => console.log(e));
```

On peut aussi utiliser la syntaxe `async`/`await` pour consommer des promesses.

```js
async function getData() {
  const response = await fetch(...);
  const data = await response.json();

  console.log('data', data)
}
```

## Modules

```js
import monDefaut, { a, b } from 'mon-module';

export default function () {}
```

---

### à suivre: [React](../1_introduction/1_origin.md)

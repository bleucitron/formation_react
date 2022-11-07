# Tableaux

Il est possible d'utiliser des tableaux d'instances dans le JSX.

```jsx
function MesAmis() {
  const pals = [
    <div>Romain</div>,
    <div>Élie</div>,
    <div>Maggie</div>,
  ];

  return <div>{pals}</div>;
}
```

Cette technique permet notamment de manipuler des tableaux pour créer des tableaux d'instances.

En supposant que je fournis:
```jsx
<MesAmis friends={['Romain', 'Rachel', 'Philippe']}>
```
je peux alors écrire:
```jsx
function MesAmis(props) {
  const instances = props.friends.map(name => <Ami name={name} />); // tableau d'instances de Ami

  return <div>{instances}</div>;
}
```

## La `prop` `key`

Quelle soit la manière dont vous le construisez, si vous utilisez un tableau pour afficher des éléments dans du JSX, vous aurez ce message dans la console:

```
Warning: Each child in an array or iterator should have a unique "key" prop.
```

Ce message, c'est React qui vous prévient qu'il risque de mélanger les éléments rendus dans le tableau.

Lorsque plusieurs instances sont fournies dans un tableau, React risque de les mélanger si on ne l'aide pas. Il a besoin d'identifier chaque instance du tableau de manière unique afin de s'assurer de sa position.

De plus, être capable d'identifier chaque instance dans un tableau permet de ne pas avoir à les remonter de zéro si leur position change dans le tableau (lors d'un tri par exemple).

On utilise alors une `props` spéciale: `key`.

> La prop `key` est spéciale: vous ne pouvez pas y accéder dans la définition du composant. Elle ne sert qu'à la mécanique interne de React.

```jsx
function MonComposant() {
  const pals = [
    <div key="romain">Romain</div>,
    <div key="elie">Élie</div>,
    <div key="maggie">Maggie</div>,
  ];

  return <div>{pals}</div>;
}
```

**Les clés `key` doivent être uniques et persistantes pour chaque tableau**. Dans l'idéal, pour une même instance, la `key` ne doit pas changer entre différents rendus.

> Il est possible d'utiliser l'indice de position de l'élément dans le tableau comme `key`, mais ça ne permettra pas à React d'optimiser les rendus.

Souvent, ces tableaux sont construits à partir de données, qui possèdent un `id` unique. **L'`id` est parfait pour la `key` dont React a besoin**.

```jsx
const friends = [
  {id: 1, name: 'Romain'},
  {id: 2, name: 'Santiago'},
  {id: 3, name: 'Inès'}
]

<MesAmis friends={friends} />

// dans MesAmis.jsx
function MesAmis(props) {
  const instances = props.friends.map(function(friend) {
    return <Ami key={friend.id} name={friend.name} />
  });

  return <div>{instances}</div>;
}
```

---

## TL;DR
- Vous pouvez utiliser des tableaux dans du JSX
- Il est fortement recommandé de fournir une prop `key` à chaque instance dans un tableau
- Les `key` doivent être uniques et persistantes
- Les `id` provenant de bases de données sont idéales pour les `key`

---

## Exercices

1) Donner une prop `students` à `House`
2) Importer la `data` depuis `_data/harrypotter.json`
2) Instancier chacune des `<House />` avec les bons étudiants, `data`

---

### à suivre: [Évènements](./6_events.md)

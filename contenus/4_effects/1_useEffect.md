# Les effets

Un effet (de bord) est une réaction à un `render` influençant l'"extérieur".

Les effets peuvent notamment servir à:
- récupérer de la donnée sur le réseau
- s'abonner à des messages
- lancer des `timeout` ou des `interval`
- faire des calculs de dimensions sur le vrai DOM

Ajouter un effet se fait avec le hook `useEffect`.

## Réagir à tous les `render`

**Le hook [`useEffect`](https://fr.reactjs.org/docs/hooks-reference.html#useeffect) prend une fonction en argument, qui sera exécutée après chaque rendu**, après la mise à jour du DOM, que ce rendu soit déclenché par la réception de props ou par la mise à jour d'un état.

```jsx
import React, { useEffect, useEffect } from 'react'

function Counter(props) {
  const { unit } = props;

  const [count, setCount] = useState(0);

  // cet effet sera exécuté à rendu du composant
  useEffect(() => {
    console.log('COUCOU');
  });

  return (
    <button onClick={() => setCount(c => c + 1)}>
      {count} {unit}
    </button>
  );
}
```

En pratique, c'est plutôt rare de se servir d'un effet pour "écouter" tous les rendus. On va plutôt réagir sélectivement.

## Réagir sélectivement

Il est **possible (et quasi impératif) de déclarer les dépendances d'un effet**, dans un tableau en deuxième argument.

```jsx

const [name, setName] = useState('Romain');
const [age, setAge] = useState(12);
const [address, setAddress] = useState('ici et là');

// cet effet sera exécuté lorsque name change
useEffect(() => {
  console.log('Le nom a changé', name);
}, [name]);

// cet effet sera exécuté lorsque age change
useEffect(() => {
  console.log("L'âge a changé", age);
}, [age]);

// cet effet sera exécuté lorsque age ou address change
useEffect(() => {
  console.log("L'âge et l'adresse ont changé", age, address);
}, [age, address]);
```

Noter qu'on peut déclarer toute variable en tant que dépendance d'un effet, notamment les props.

> Il est possible d'activer un outil (un linter) pour détecter des dépendances d'effets manquantes

## Réagir au montage

Le montage d'une instance correspond au moment où l'instance est accrochée dans le DOM virtuel (et donc dans le vrai DOM). Autrement dit, le montage est le premier rendu d'une instance.

**Il est possible de réagir au montage d'une instance avec `useEffect`, en passant une liste de dépendances vide**.

```jsx
// cet effet ne réagira qu'au montage du composant
useEffect(() => {
  console.log("Mounted");
}, []);
```

Réagir au montage d'une instance est en général utilisé pour aller chercher de la donnée sur le réseau, ou s'abonner à des messages.

---

## TL;DR

- On peut réagir aux `render` avec `useEffect`
- Il faut déclarer tous les dépendances de `useEffect`
- On peut réagir au montage en passant une liste de dépendance vide `[]`

---

## Exercices

1. Aller chercher la donnée des `students` sur le réseau plutôt qu'utilise `import ...`
```js
const url = 'https://hp-api.herokuapp.com/api/characters/students';
```

2. Faire en sorte que l'`exp` d'un `<Student />` augmente toutes les secondes au lieu du `mousemove`

### À suivre: [Nettoyage](./2_cleanup.md)

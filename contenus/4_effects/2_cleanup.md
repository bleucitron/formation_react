# Nettoyage des effets

Il est souvent nécessaire de "nettoyer" les effets.

En effet, **ne pas nettoyer certains effets peut mener à des fuites de mémoire**.

## Fuites de mémoire

Par exemple, étudions le composant `<Time />` suivant, qui utilise un effet pour lancer un `interval` et afficher l'heure courante.

```jsx
import React, { useState, useEffect } from 'react';

function Time() {
  const [datetime, setDatetime] = useState(new Date().toTimeString())

  useEffect(() => {
    setInterval(() => {
      setDatetime(new Date().toTimeString());
      console.log('maj time')
    }, 1000);
  }, []);

  return <div>{datetime}</div>
}

function App() {
  const [clockOn, setClockOn] = useState(false);

  return (
    <div>
      <button onClick={() => setClockOn(o => !o)}>Clock</button>
      {clockOn && <Time />}
    </div>
  );
}
```

Dans cet exemple, on lance un intervalle au montage de `<Time />`. Mais on ne l'arrête pas au démontage. L'intervalle continue de tourner, mais ne sert à rien. Donc si on affiche/désaffiche plusieurs fois `<Time />`, les intervalles vont se cumuler les uns aux autres, un seul étant réellement nécessaire. C'est une fuite de mémoire.

## Nettoyage

On peut corriger cette fuite de mémoire en "nettoyant" l'effet.

```jsx
useEffect(() => {
  const i = setInterval(() => {
    setDatetime(new Date().toTimeString());
    console.log('maj time')
  }, 1000);

  return () => clearInterval(i);
}, []);
```

**Tous les effets peuvent renvoyer un callback, qui sera exécuté au démontage du composant**.

```jsx
useEffect(() => {
  doSomething();

  return () => cleanup();
}, [deps]);
```

## Nettoyage sélectif

On a vu que les callbacks de nettoyage s'exécutaient au démontage.

Mais **les callbacks de nettoyage s'exécutent également avant chaque `render` concerné par les dépendances**.

```jsx
useEffect(() => {
  console.log('effect', count);

  return () => console.log('clean effect', count);
}, [count]);
```

> Le `count` du cleanup sera la valeur du state juste avant qu'il ne soit mis à jour

Cela permet notamment de se désabonner aux canaux d'une application de chat si la liste de nos abonnements change, pour se réabonner immédiatement après.

```jsx
useEffect(() => {
  channels.forEach(subscribe);

  return () => channels.forEach(unsubscribe);
}, [channels]);
```

---

## TL;DR

- Les effets non nettoyés peuvent mener à des fuites de mémoire
- Les effets peuvent être nettoyés au démontage
- Les effets peuvent être nettoyés juste avant chaque mise à jour de dépendance

---

## Exercices

1. Nettoyer l'intervalle qui met à jour l'`exp` de `Student`

## À suivre: [Vous utilisez mal les effets](./3_misusage.md)

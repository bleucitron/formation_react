# Le contexte

Au fur et à mesure qu'une application React grandit, le nombre d'étages de composants augmente, et apparaît alors un usage: le *prop drilling*.

## Prop drilling

Plus une application est complexe, plus la probabilité d'avoir besoin de certaines données à des endroits très différents est grande. Cela implique de devoir remonter l'état de plus en plus haut, voire même souvent jusqu'à la racine de l'application, ce qui donne des applications où tout le state est concentré à la racine.

La conséquence de ce phénomène est qu'il faut redescendre la donnée en tant que `props` sur autant d'étages, ce qui peut devenir fastidieux. C'est ce qu'on appelle le *prop drilling* (le *perçage de props*).

## [`useContext`](https://fr.reactjs.org/docs/hooks-reference.html#usecontext)

React possède une fonctionnalité qui permet d'éviter le *prop drilling*: le contexte.

Il est possible de **définir au sein d'un composant un contexte qui va être accessible à tous ses enfants**. Cela revient un peu à sauter des étages en "téléportant" la donnée.

Trois étapes sont nécessaires:
- créer le contexte avec `createContext`
- encadrer la branche concernée par le contexte avec le `<Provider>` du contexte en lui fournissant une prop `value`
- utiliser le contexte avec `useContext()`

```jsx
import React, { createContext, useContext, useState } from 'react';

const NbContext = createContext();

function Parent() {
  const [nb, setNb] = useState(1);

  return (
    <div onClick={() => setNb(n => n + 1)}>
      <NbContext.Provider value={nb}>
        <Enfant />
      </NbContext.Provider>
    </div>
  );
}

function Enfant() {
  const nb = useContext(NbContext);

  return <div>{nb}</div>;
}
```

**Chaque fois que la valeur d'un contexte va changer, React va systématiquement re`render` tous les composants** qui s'en servent.

> Dans l'exemple ci-dessus, on choisit de coupler le contexte avec un `state`, ce qui n'est pas strictement nécessaire.

## À consommer avec modération

Le contexte est un **outil pratique, mais il faut éviter de s'en servir trop souvent**.

L'idée de passer des `props` de parent à enfant fait partie des principes fondateurs de React (le *one-way data flow*), et permet de bien suivre le flot de données au sein d'une application. Utiliser trop souvent le contexte revient à contourner ce principe, et et **risque de rendre floues les relations de données entre composants**.

Notamment, **le contexte ne doit pas servir à réduire le nombre `props` d'un composant**, mais à rendre disponible de la donnée à des endroits très différents de l'application.

De plus, utiliser le contexte dans un composant le couple à ce contexte, ce qui le rend inutilisable dans une application n'ayant pas accès à ce contexte.

Voici quelques cas classiques d'utilisation de contexte:
- l'internationalisation
- le thème
- le compte actuellement connecté
- le routing
- la gestion d'états globaux

---

## TL;DR

- Le *prop drilling* est l'usage de passer des `props` sur beaucoup d'étages
- On peut éviter le *prop drilling* avec du contexte
- Le contexte s'utilise avec `createContext`, un `<Provider />`, ainsi que le hook `useContext`
- Toutes les instances d'un composant utilisant un contexte seront rerendues si la valeur du contexte change
- Ne pas utiliser le contexte systématiquement

---

## Exercices

1. Ajouter un `<button>` à l'`App` permettant de changer un state `lang` de `en` à `fr`
2. Utiliser le contexte ainsi que le fichier `data/fr.json` pour traduire les noms des `House` si la `lang` est `fr`

---

### À suivre: [Optimisations](./3_optimizations.md)

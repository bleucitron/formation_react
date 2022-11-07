# Gestion des évènements

Les composants standards sont capables d'écouter les évènements classiques, type, `click`, `mousemove`, `scroll`, etc...

Pour cela il faut ajouter une "prop" `onClick`, `onMouseMove`, `onScroll`, etc..., à qui on doit fournir une fonction listener, comme on ferait en Javascript standard.

```jsx
function Bouton() {
  return (
    <button onClick={() => {
      console.log('Validé')
    }}>
      Valider
    </button>
  );
}
```

> Le listener que vous fournissez fonctionne de la même façon que d'habitude. Notamment, vous pouvez accéder aux propriétés de l'évènement généré via l'argument du listener.

Ces "props" `onEvent` ne sont accessibles que sur les composants standards. Si vous essayez de vous en servir sur un composant custom, cela n'aura aucun effet, à moins de rendre possible explicitement ce comportement.

## Arguments

Si vous avez besoin de passer des arguments aux listeners, vous devez le faire en créeant une fonction intermédiaire, qui invoquera la fonction listener d'origine, avec un argument particulier, selon les besoins.

```jsx
function ajouter(name) { // le listener d'origine
  console.log("Ajout de ", name);
}

function Bouton() {
  return (
    <button onClick={() => ajouter('Romain')}>
      Ajouter
    </button>
  );
}
```

## Procuration

Il est courant de passer des fonctions en prop d'un composant.

```jsx
function Parent() {
  function direBonjour() {
    console.log('Bonjour !')
  }

  return <Enfant reagirAuClick={direBonjour} />
}

function Enfant(props) {
  return <div onClick={props.reagirAuClick} />
}
```

C'est alors `<Parent />` qui décide totalement du comportement de la fonction `direBonjour`. L'`<Enfant />` n'a alors aucune conscience de ce que fait cette prop. Il se contente de l'exécuter au click.

Cela aura particulièrement de l'importance lors du chapitre sur l'état.

---

## TL;DR

- Les composants standards peuvent écouter des évènements grâce à `onClick`, `onMouseMove`, ...
- Les composants custom ne peuvent pas écouter d'évènement
- Un composant parent peut fournir un prop sous forme de fonction à ses enfants, pour que ceux-ci s'en servent en tant que listener

---

## Exercices

1) Ajouter un listener au clic sur l'élément principal de `Student` pour afficher en `alert` le nom de l'acteur ou l'actrice

---

### à suivre: [Dev tools](./7_devtools.md)

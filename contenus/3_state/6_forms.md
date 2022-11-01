# Formulaires

Il existe deux possibilités de gérer les formulaires avec React.

## Formulaires non controlés

Un formulaire peut avoir différents types d'input:
- `<input />`, de type texte, number, checkbox, radio, file, etc...
- `<select />`, avec des `<option />`
- `<textarea />`
- ...

Tous les éléments HTML utilisables en formulaire possèdent un état interne propre.
Il est ainsi possible de voir évoluer le texte d'un `<input type='text' />` lorsque l'on tape dedans.

On peut alors se contenter de laisser tous ces éléments de formulaire gérer leur propre état indépendamment de React, et venir lire ces valeurs manuellement directement dans le DOM.

```jsx
function FormNonControlé() {
  return (
    <form>
      <input />
      <p>Vous vous appelez Romain.</p>
    </form>
  )
}
```

> Il est alors nécessaire d'utiliser des *refs* pour accéder au DOM réel, que l'on mentionnera plus tard.

Cette approche s'appelle les **formulaires non controlés**. Elle est similaire à ce que l'on ferait en HTML classique, mais a des inconvénients:
- il nécessaire de venir chercher les éléments du vrai DOM, ce qui est en général déconseillé
- vous n'avez pas d'accès direct aux mises à jour d'état, il est donc plus fastidieux d'y réagir

## Formulaires controlés

À l'inverse, il est recommandé dans la plupart des situations d'utiliser des **formulaires controlés**.

Dans ce cas, l'état de chaque `<input />` va être intégralement géré par React.

Dans le cas précédent, je ne pouvais pas simplement accéder à la valeur de l'`<input />` sans utiliser une *ref*.

Mais je peux imposer la valeur de l'input, et faire en sorte que cette valeur soit un `state`.

```jsx
function FormControlé() {
  const [value, setValue] = useState('Romain');

  return (
    <form>
      <input value={value} />
      <p>Vous vous appelez {value}.</p>
    </form>
  )
}
```

L'état interne de l'input est alors entièrement géré par React.

Le problème ici est que je ne peux plus modifier mon `<input />`, parce que sa valeur est imposé par React, et ne change jamais. Il faut donc faire évoluer l'état au fur et à mesure que l'on tape dans l'`<input />`, en utilisant un event listener, et en se servant de l'évènement généré.

```jsx
function FormControlé() {
  const [value, setValue] = useState('Romain');

  function updateValue(event) { // event ici représente l'évènement généré
    setValue(event.target.value);
  }

  return (
    <form>
      <input value={value} onInput={updateValue}/>
      <p>Vous vous appelez {value}.</p>
    </form>
  )
}
```

Vous pouvez alors gérer plusieurs `<input />` en utilisant plusieurs états (ou éventuellement un état objet).

Attention, [les évènements générés dans une application React sont un peu différents des évènements DOM classiques](https://fr.reactjs.org/docs/events.html).

> En React `onChange` et `onInput` sur un `<input />` sont équivalents.

## `<textarea />`

En HTML standard, la valeur d'un `<textarea />` est définie par le texte de son enfant.

```html
<textarea>
  Bonjour, voici du texte dans une zone de texte
</textarea>
```

En React, un `<textarea />` a une prop `value`, que l'on peut faire évoluer comme la valeur d'un `<input />`.

```jsx
function Form() {
  const [text, setText] = useState('Coucou');

  return (
    <form>
      <textarea value={text} onInput={e => setText(e.target.value)} />
    </form>
  );
}
```

## `<select />`

Les `<select />` sont des listes déroulantes. Il prennent des `<option />` en enfant. En HTML classique, c'est sur les `<option />` que l'on définit celle qui est sélectionnée.

```html
<select>
  <option value="grapefruit">Pamplemousse</option>
  <option value="lime">Citron vert</option>
  <option selected value="coconut">Noix de coco</option>
  <option value="mango">Mangue</option>
</select>
```

En React, on peut utiliser une prop `value` sur le `<select />`.

```jsx
function Form() {
  const [selected, setSelected] = useState('lime');

  return (
    <form>
      <select value={selected} onChange={e => setSelected(e.target.value)}>
        <option value="grapefruit">Pamplemousse</option>
        <option value="lime">Citron vert</option>
        <option value="coconut">Noix de coco</option>
        <option value="mango">Mangue</option>
      </select>
    </form>
  );
}
```

---

## TL;DR

- Les inputs de formulaires ont nativement leur propre état
- Il est possible d'utiliser des formulaires non controlés, où les inputs gèrent leur état eux-même
- Il est recommandé d'utiliser des formulaires controlés, où l'état des inputs est entièrement géré par React
- Les évènements générés par React sont un peu différents des classiques
- Les `<textarea />` et `<select />` peuvent avoir des props `value`

---

## Exercices


1. Ajouter à notre `App` un formulaire permettant d'ajouter un nouvel élève à `students` en utilisant:
  - un `input` texte pour `name`
  - un `input` radio pour `ancestor` avec les choix suivants: `half-blood`, `muggleborn`, `pure-blood`
2. Créer un composant `Hat`, qui affiche la liste des noobs, et permet de leur assigner une `house`
3. Faire en sorte de pouvoir supprimer un élève de sa `House`, il doit redevenir noob

---

### à suivre: [Les effets](../4_effects/index.md)

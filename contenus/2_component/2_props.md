# Les `props`

Jusque là, on a parlé de "données", d'"attributs". En réalité, on parle de **`props`**. Ces `props` sont l'ADN du composant:

- **un composant reçoit ses props de son parent**
- **un composant ne peut pas changer ses props**

En JSX, lorsque l'on passe des "attributs" à une instance de composant, on lui passe en réalité des props. On ne parle jamais d'attributs en React. J'ai utilisé le terme jusque là pour aider à la compréhension de la syntaxe JSX.

```jsx
<Personne nom="Romain" age={12} malade /> // name et weight sont fournis en props
```

> Si on ne met pas de `=`, la props est fournie comme étant le booléen `true`, comme pour `malade`.

À l'intérieur d'un composant, **on accède aux props via l'argument de la fonction**, qu'on appelle en général `props` (mais pas obligé).

**Les `props` sont un objet**, on peut accéder à chacune des `props` via `props.leNomDeLaProps`.

```jsx
function Personne(props) {
  return (
    <div>
      <div>Youpi, je m'appelle {props.nom} !</div>
      <div>J'ai {props.age} ans.</div>
    </div>
  );
}
```

Souvent, on se sert du destructuring pour simplifier l'accès aux `props`. Cela permet d'éviter d'écrire `props.` en permanence.

```js
const { nom, age } = props; // on peut alors se contenter d'écrire nom ou age
```

## Les `props` sont intouchables

On peut toujours essayer de changer les props à l'intérieur d'un composant, mais ça déclenchera aucune mise à jour, et va créer de la confusion. Il ne faut donc jamais le faire.

Un composant ne peut pas changer ses props, **il se contente de les consommer**.

## `className`

Il est courant de fournir un `className` à l'élément racine d'un composant, pour faciliter l'ajout de style aux éléments de ce composant.

En général, on utilise le même nom que le nom du composant.

```jsx
function Personne(props) {
  return (
    <div className='Personne'>
      <div>Youpi, je m'appelle {props.nom} !</div>
      <div>J'ai {props.age} ans.</div>
    </div>
  );
}
```

Noter que, à moins de l'avoir explicitement prévu, donner `className` à une instance de composant personnalisé n'applique pas cette classe au composant.

```jsx
<Personne className='maClasse' /> // ceci ne donne pas par défault une classe à <Personne />
```

### Props spreading

Vous pouvez fournir plusieurs props d'un coup en utilisant le spreading d'objet:

```jsx
const data = {
  nom: 'Romain',
  age: 12,
  malade: true,
}

<Personne nom={data.nom} age={data.age} malade={data.malade} /> // écriture classique
<Personne {...data} /> // écriture spread
```

---

## TL;DR

- Les `props` sont l'ADN d'un composant
  - il les reçoit comme données de son parent
  - il ne peut pas les changer, il ne peut que les consommer
- On accède aux `props` dans l'argument de la fonction du composant
- Lorsqu'on affiche plusieurs instances dans un tableau, il est recommandee de fournir une `key` unique par élément
- Vous pouvez *spread* les propriétés d'un objet en tant que `props`

---

## Exercices

1) Fournir les props `name`, `logo` à `<House />`
2) Fournir les props `name`, `birthday`, et `picture` à `<Student />`
3) Afficher les maisons Griffondor et Serpentard avec quelques élèves

---

### à suivre: [`Rendu conditionnel`](./3_conditional_rendering.md)

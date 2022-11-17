# Rendu conditionnel

Il est tout à fait possible de conditionner ce que va afficher un composant en fonction des `props`.

```jsx
function Personne(props) {
  if (props.age > 100) {
    return (
      <div>
        <div>Youpi, je m'appelle {props.nom} !</div>
        <div>J'ai {props.age} ans.</div>
        <div>Je suis centenaire !</div>
      </div>
    );
  }

  return (
    <div>
      <div>Youpi, je m'appelle {props.nom} !</div>
      <div>J'ai {props.age} ans.</div>
    </div>
  );
}
```

Néanmoins, dans ce cas on a dupliqué beaucoup de markup.

**Il est possible de se servir de ternaires dans le JSX pour choisir d'afficher ou non un élément**.

```jsx
function Personne(props) {
  return (
    <div>
      <div>Youpi, je m'appelle {props.nom} !</div>
      <div>J'ai {props.age} ans.</div>
      { props.age > 100 ? <div>Je suis centenaire !</div> : null }
    </div>
  );
}
```

> Notez l'usage de `{` et `}` pour encadrer le calcul conditionnel dans le JSX.

De plus, puisque le JSX représente en réalité un objet Javascript, **il est tout à fait possible de stocker du JSX dans des variables**, et d'utiliser un ternaire pour choisir de l'afficher ou non.

```jsx
function Personne(props) {
  const old = <div>Je suis centenaire !</div>;

  return (
    <div>
      <div>Youpi, je m'appelle {props.nom} !</div>
      <div>J'ai {props.age} ans.</div>
      { props.age > 100 ? old : null }
    </div>
  );
}
```

Il est même possible de stocker tout le ternaire dans une variable.

```jsx
function Personne(props) {
  const old = props.age > 100 ? <div>Je suis centenaire !</div> : null;

  return (
    <div>
      <div>Youpi, je m'appelle {props.nom} !</div>
      <div>J'ai {props.age} ans.</div>
      {old}
    </div>
  );
}
```

> On peut aussi écrire le rendu conditionnel `props.age > 100 && old`.

---

## TL;DR

- Vous pouvez utiliser conditionner l'affichage de certains éléments dans le JSX, notamment via l'usage de ternaires

---

## Exercices

1) Ajouter une prop `favorite` à `<Student />`
2) Si `favorite` est à `true`, afficher une `<div>` qui avec la classe `favorite`
3) Donner cette prop à un des élèves
4) Conditionner l'affichage de l'`<img>` de chaque `<Student>` pour ne rien afficher si l'image n'est pour fournie

---

### à suivre: [Tableaux](./5_lists.md)

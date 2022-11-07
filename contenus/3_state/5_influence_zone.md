# Zone d'influence

Ok, on peut définir de l'état. Mais où le placer ? Comment gérer ses mises à jour à travers l'arbre ?

Le state appartient à une instance de composant, et ne peut en sortir. Mais il concerne tout de même potentiellement tous les descendants du composant.

On parle alors de _zone d'influence du `state`_.

SCHEMA ZONE D'INFLUENCE

## Partage de l'état

Un corollaire de la zone d'influence est qu'un `state` ne peut pas être remonté au-dessus du composant qui le définit.

Si un `state` a besoin d'être fourni à des composants qui ne font pas partie de la descendance du composant, c'est que ce `state` est mal placé. Il faut alors "remonter l'état" pour pouvoir le partager à son parent, ou à ses frères et soeurs.

**Le `state` doit être placé sur le plus proche ancêtre commun à tous les composants qui le nécessitent**. C'est alors le parent qui contrôle l'état, et qui le redescend aux enfants via `props`. Les enfants n'ont alors plus d'état en tant que tel.

Dans l'exemple ci-dessous, chaque `Item` a son propre état `active`, et peut être activé indépendamment de l'autre.

```jsx
function List () {
  return (
    <ul>
      <Item
        id='a'
        key='a'
      />
      <Item
        id='b'
        key='b'
      />
    </ul>
  );
}

function Item(props) {
  const { id } = props;
  const [active, setActive] = useState(false);

  function toggle() {
    setActive(a => !a);
  }

  return (
    <li className={active ? 'active' : ''} onClick={toggle}>
      {id}
    </li>
  );
}
```

Si je veux que un seul `Item` soit activé à la fois, quelqu'un doit avoir conscience plus haut niveau de ce qui sélectionné: dans ce cas l'état doit remonter dans `List`. Ce qui implique que les `Item` doivent recevoir du parent une prop contenant l'information de si oui ou non l'instance est active: son state s'est transformé en props.

```jsx
function List () {
  const [selected, setSelected] = useState();

  return (
    <ul>
      <Item
        id='a'
        active={selected === 'a'}
        key='a'
      />
      <Item
        id='b'
        active={selected === 'b'}
        key='b'
      />
    </ul>
  );
}

function Item(props) {
  const { id, active } = props;

  return (
    <li className={active ? 'active' : ''}>
      {id}
    </li>
  );
}
```

> Bien réfléchir à la position de chaque état est important pour ne pas avoir à multiplier les refactor de code, mais malgré ça, faire "remonter l'état" est une pratique inévitable quand on développe en React.

## Procuration

On a vu que le `state` est local à chaque instance de composant. Il ne peut pas en sortir. Il peut éventuellement être transmis à un enfant en tant que `props`, mais sans que l'enfant ne soit conscient que cette `props` vient du `state` de son parent.

Il n'est donc pas possible à un composant d'avoir accès au `state` d'un autre composant, et encore moins de le modifier.

Chaque composant est le seul responsable de son `state`.

**Un composant peut néanmoins donner procuration à ses enfants pour qu'ils puissent agir sur le `state`**. Le parent donne explicitement le droit à son enfant de modifier son `state`.
Le parent fournit alors une fonction en tant que `props`, que l'enfant pourra exécuter, sans qu'il soit conscient de ce que cette fonction fait.

Dans l'exemple précédent, notre `List` controlait la sélection de l'`Item`. Mais rien en pratique n'a été prévu pour changer la sélection.
Pour que la sélection se déclenche au clic sur chaque `Item`, on peut fournir un prop de procuration, `select`.

```jsx
function List () {
  const [selected, setSelected] = useState();

  return (
    <ul>
      <Item
        id='a'
        selected={'a' === selected}
        select={() => setSelected('a')}
        key='a'
      />
      <Item
        id='b'
        selected={'b' === selected}
        select={() => setSelected('b')}
        key='b'
      />
    </ul>
  );

}

function Item(props) {
  const { id, selected, select } = props;

  return (
    <li className={selected ? 'selected' : ''} onClick={select}>
      {id}
    </li>
  );
}
```

---

## TL;DR

- Le `state` n'a de l'influence que sur le composant qui le définit, ainsi que sur toute sa descendance
- Le `state` doit être placé sur le plus proche ancêtre commun à tous les composants qui le nécessitent
- Un `state` ou un dérivé de `state` peut être passé en `props` aux enfants
- Un composant peut donner procuration à ses enfants pour modifier son `state`


---

## Exercices

1. Remonter l'état `open` de `House` dans l'`App`, afin de limiter l'ouverture du détail des `House` à une seule à la fois
2. Faire de même avec les `points`, pour pouvoir afficher dans `App` un classement des `House`

---

### à suivre: [Formulaires](./6_forms.md)

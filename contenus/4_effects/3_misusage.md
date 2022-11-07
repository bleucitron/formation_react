# Bien utiliser les effets

## Fuites de mémoires

**Utiliser `setX` dans un `useEffect` peut déclencher des boucles infinies**.

Si un effet dépend de `x`, il sera déclenché si `x` change. Si au sein de ce même effet, on `setX`, alors `x` va changer, et déclencher l'effet, qui réappeler `setX`...

```jsx
const [x, setX] = useState()
useEffect(() => {
  setX(1); // boucle infinie
}, [x]);
```

## États dérivés

Il est courant de voir des débutant.e.s utiliser les effets pour mettre à jour des variables qui dépendent d'une `prop` ou d'un `state`.

```jsx
const [x, setX] = useState()
const [y, setY] = useState(x + 1)

useEffect(() => {
  setY(x + 1);
}, [x]);
```

Il est important de bien comprendre que **les effets ne servent pas à mettre à jour des états dérivés**. Comme la boucle de `render` va réexécuter les fonctions de chaque instance de composant, si l'on veut calculer un état dérivé, il suffit de le faire directement.

```jsx
const [x, setX] = useState()
const y = x + 1
```

> Ici, `y` n'est pas un `state`, mais un état dérivé, qui ne mérite pas un `useState`.


## Éviter les calculs lourds ?

On peut être tenté d'utiliser `useEffect` pour *mémoiser* les résultats d'un calcul lourd qu'on ne veut pas refaire à chaque `render`.

```jsx
function Composant(props) {
  const {x, y} = props;
  const resultat = monCalculLourd(x, y); // recalculé à chaque rendu

  return <div>{resultat}</div>
}
```

```jsx
function Composant(props) {
  const {x, y} = props;
  const [resultat, setResultat] = useState(monCalculLourd(x, y))

  useEffect(() => { // recalculé uniquement lorsque x ou y change
    const d = monCalculLourd(x, y)
    setResultat(d);
  }, [x, y]);
  return <div>{resultat}</div>
}
```

Néanmoins, même si cette technique fonctionne, **il existe un hook dédié à l'optimisation des calculs lourds: `useMemo`**.

## Effets asynchrones

**La fonction que l'on passe à `useEffect` ne doit pas être asynchrone**.

En effet, `useEffect` attend une fonction en argument, et non une Promesse.

```jsx
// Ce code ne fonctionnera pas
useEffect(async () => {
  const data = await fetchData();
  setData(data);
}, []);
```

À la place, on peut soit passer par `.then()`, soit en utilisant une fonction intermédiaire asynchrone.

```jsx
// Option 1
useEffect(async () => {
  fetchData().then(data => setData(data));
}, []);
```

```jsx
// Option 2
useEffect(async () => {
  async function getData() {
    const data = await fetchData();
    setData(data);
  }

  getData();
}, []);
```

## Évènements vs effets

Il y a souvent une confusion entre les évènements et les effets.

**Les évènements servent à réagir à des interactions utilisateur**, et se gèrent via des *event listeners* de type `onClick`.

**Les effets servent à synchroniser des données**, entre notre application et soit le réseau, soit le temps qui passe, soit le DOM réel.

Les évènements sont souvent déclenchés "manuellement" par l'utilisateur, en revanche les effets sont plutôt des réactions que l'on souhaite automatiques.

## [Et d'autres cas](https://beta.reactjs.org/learn/you-might-not-need-an-effect)

---

## TL;DR

- Faire attention lorsqu'on utilise `setState` dans un effet
- Ne pas utiliser les effets pour calculer un état dérivé
- Ne pas utiliser un effet lorsqu'un évènement suffit
- Ne pas utiliser les effets pour éviter les calculs lourds
- Ne pas utiliser d'effets directement asynchrones
- Et d'autres...

---

### À suivre: [Les hooks](../5_hooks/index.md)

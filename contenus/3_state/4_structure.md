# Structurer son état

On est maintenant capables de définir et mettre à jour de l'état dans un composant.

Néanmoins tout ne mérite d'être un état. Mal choisir son état peut être une épine dans le pied. Il est donc important d'avoir une réflexion sur la structure de l'état d'un composant.

La doc officielle fournit [des pistes intéressantes](https://beta.reactjs.org/learn/choosing-the-state-structure).

> Les pistes évoquées ci-dessous sont honteusement traduites de la doc officielle.

## Rassembler les états liés

Si des variables d'état sont toujours mises à jour ensemble, il est pertinent de les fusionner dans un seul état, sous forme d'objet par exemple. Cela permet d'éviter la désynchronisation de ces variables.

Par exemple, latitude et longitude vont généralement de pair:
```jsx
const [lat, setLat] = useState(44.8637178);
const [lon, setLon] = useState(-0.586012);
```

Il est pertinent de rassembler ces états dans un objet:
```jsx
const [coords, setCoords] = useState({
  lat: 44.8637178,
  lon: -0.586012
});
```

## Éviter les contradictions d'état

Il est possible de définir des variables d'état qui peuvent être en contradiction les unes avec les autres. Cette situation est un terrain fertile pour les bugs, et devrait être évitée si possible.

Dans cet exemple, il est facile de se retrouver avec `isSending` et `isSent` tous les 2 à `true`, ce qui est contradictoire.
```jsx
const [text, setText] = useState('');
const [isSending, setIsSending] = useState(false);
const [isSent, setIsSent] = useState(false);
```

On peut plutôt opter par une variable `status`, dont les valeurs peuvent être `typing`, `sending` ou `sent`, par exemple:
```jsx
const [text, setText] = useState('');
const [status, setStatus] = useState('typing'); // ou 'sending' ou 'sent'
```

## Éviter la redondance d'état

S'il est possible au moment du rendu de calculer une valeur en se basant entièrement sur une combinaison de `props` et de `state`, cette valeur ne devrait pas être définie comme un état.

En effet, les fonctions de composants étant réexécutées à chaque rendu, les calculs à l'intérieur des composants sont également réévalués.

Ici, calculer le `fullName` est entièrement dépendant de `firstName` et `lastName`, le définir en tant que état à part ouvrirait la porte à la désynchronisation de cette valeur.
```jsx
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [fullName, setFullName] = useState('');
```

On peut simplement recalculer `fullName` à chaque rendu.
```jsx
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

const fullName = `${firstName} ${lastName}`;
```

## Éviter la duplication d'état

Quand la même donnée est dupliquée dans plusieurs variable d'états, ou dans des objets imbriqués, cela rend difficile la synchronisation de cette donnée.

Il est judicieux de réduire la duplication de données lorsque c'est possible.

Dans cet exemple, on choisit de mettre dans une variable `selectedItem` un objet `item` entier, notamment son `title`. Mais si l'on veut modifier ce titre, il faudrait alors penser à le modifier à 2 endroits: dans `items`, ainsi que dans `selectedItem`.

```jsx
const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

const [items, setItems] = useState(initialItems);
const [selectedItem, setSelectedItem] = useState(
  items[0]
);
```

À la place, on peut choisir de ne stocker que l'`id` de l'item choisi dans une variable d'état `selectedId`, et en déduire l'item complet. Cela permet de réduire au strict minimum l'information représentant l'état en question.

```jsx
const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

const [items, setItems] = useState(initialItems);
const [selectedId, setSelectedId] = useState(items[0].id);

const selectedItem = items.find(i => i.id === selectedId);
```

## Éviter les états profondément imbriqués

Avoir une variable d'état en tant qu'objet ayant plusieurs niveaux de profondeur rend la mise à jour complexe et fastidieuse.

Dans la mesure du possible, préférer les structures plates, quitte à séparer les données dans des structures différentes.

---

## TL;DR

- Rassembler les états liés
- Éviter les contradictions d'état
- Éviter la redondance d'état
- Éviter la duplication d'état
- Éviter les états profondéments imbriqués

---

## Exercices

1. Remplacer l'état `noobs` de `App` par un état `students`. Les `students` sans `house` sont des noobs
2. Modifier le code pour récupérer les noobs à partir de `students`

---

### à suivre: [Zone d'influence](./5_influence_zone.md)

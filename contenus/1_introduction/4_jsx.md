# [JSX](https://reactjs.org/docs/introducing-jsx.html)

Le framework React a permis de résoudre 3 problèmes que l'on rencontre quand on développe une application front-end moderne:

- l'architecture
- le parcours de données
- les performances

Mais le code nécessaire pour profiter des fonctionnalités de React devenait de plus en plus verbeux, et éloigné de la réalité du code HTML produit à chaque cycle.

C'est la raison d'être du JSX.

**Le JSX est une syntaxe nouvelle permettant d'écrire du code Javascript qui représente explicitement la structure du HTML qui sera rendu.**

```jsx
const person = <div>Je m'appelle Romain</div>;
const title = <h1>Je m'appelle Romain</h1>;
```

Dans l'exemple ci-dessus, je crée une instance du composant standard `div` et `h1`, avec du contenu texte, et j'assigne cette instance à une variable.

Il est important de comprendre que **le JSX n'est pas obligatoire pour utiliser React**.

## Le JSX, c'est du JS

Il peut être tentant de faire l'amalgame entre du JSX et du HTML.

**Le JSX ressemble à du HTML, mais ce n'est pas du HTML. C'est bien du Javascript.**

Mais ce n'est pas du Javascript standard. Les navigateurs ne sont pas capables d'interprêter la syntaxe JSX. **Il est donc absolument nécessaire de transformer le code JSX en Javascript standard.**

C'est le rôle d'outils de développement comme [Babel](https://babeljs.io/).

En observant le code produit par la compilation de JSX, on comprend mieux que **le JSX représente des objets JS**.

```jsx
const person = <div>Je m'appelle Romain</div>;

// après compilation
const person = React.createElement('div', "Je m'appelle Romain");
```

Comme précisé plus haut, vous pouvez choisir de pas utiliser de JSX. Dans ce cas, pas besoin d'utiliser Babel pour transformer le JSX. Il suffit simplement d'utiliser la syntaxe nue de React, celle qui est générée après compilation de JSX. Néanmoins, la syntaxe nue est bien plus verbeuse, et rend l'arborescence plus obscure.

## Spécificités du JSX

La syntaxe JSX a des spécificités auxquelles il faut s'habituer.

### Expressions

**Il faut encadrer toute expression par des `{}`**.

```jsx
// un nombre est une expression
const myAge = <div>J'ai {34} ans</div>;

// une opération est un expression
const myAge = <div>J'ai {30 + 4} ans</div>;

// la lecture d'une variable est une expression
const age = 34;
const myAge = <div>J'ai {age} ans</div>;

// l'exécution d'une fonction est une expression
function updateAge(age) {
  return age + 1;
}
const myAge = <div>J'ai {updateAge(33)} ans</div>;

// du JSX est une expression en soi
const age = <span>34</span>;
const myAge = <div>J'ai {age} ans</div>;
```

### Attributs

Les éléments HTML peuvent avoir des attributs. De la même façon,

- **tous les composants React standards peuvent avoir des "attributs"**.

```jsx
const me = <div id='12345'>Romain</div>;
const link = <a href='https://twitter.com/r_ourson'>Romain</a>;
```

On verra plus tard qu'en React, on appelle ces _attributs_ des _props_.

- **L'attribut HTML `class` n'existe pas en JSX. À la place, on utilise `className`.**

```jsx
const me = <div className='name'>Romain</div>; // 'className' devient 'class' une fois traduit en HTML
```

Cette bizarrerie s'explique par la volonté de React de coller aux APIs JS du DOM plus qu'à la syntaxe HTML. Or, pour donner une classe à élément HTML avec du JS, on écrit `element.className = 'myClass';`.

- **On peut ajouter des listeners aux composants standards**

[Tous les évènements DOM standards sont accessibles](https://reactjs.org/docs/events.html) sur les composants standards. Ce n'est pas le cas pour les composants personnalisés.

```jsx
// JSX
const me = <div onClick={direBonjour}>Romain</div>;
const marathon = <section onScroll={calculerLaDistance}>42km</section>;
```

`direBonjour` et `calculerLaDistance` sont des fonctions, qu'il ne faut a priori pas exécuter. On se contente de les passer à `onClick` (ou autre), qui se chargera de l'exécution lorsque l'évènement attendu se produira.

### Enfants

**On peut ajouter des enfants à des composants**, en les incluant dans leur parent, comme on le ferait en HTML.

```jsx
// JSX
const me = (
  <div>
    <header>
      <h1>Romain l'Ourson</h1>
      <h2>Jardinier galactique</h2>
    </header>
    <UnComposantCustom />
  </div>
);
```

Noter que les parenthèses ici sont nécessaires car notre JSX est sur plusieurs lignes. Si vous utilisez un formatteur automatique, il devrait s'occuper de les ajouter pour vous.

### Composants personnalisés

Les composants personnalisés s'écrivent comme des éléments HTML. On leur fournit de la donnée comme si c'était des "attributs".

```jsx
// JSX
<Personne nom='Romain' age={15} />
<Personne nom='Romain' age={15}></Personne> // on peut éventuellement utiliser une balise fermante
```

### [Fragments](https://fr.reactjs.org/docs/fragments.html)

**On peut grouper des instances sans parent via `<></>`**, qu'on appelle un Fragment.

```jsx
// JSX
const me = (
  <>
    <header>
      <h1>Romain l'Ourson</h1>
      <h2>Jardinier galactique</h2>
    </header>
    <UnComposantCustom />
  </>
);
```

Un Fragment n'aura aucune existence dans le DOM réel, il ne sert à React que pour organiser les instances.

## Attaques d'injection

Par défault, JSX [échappe les caractères potentiellement dangereux](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-in-html) lors de la conversion vers du HTML.

Cela contribue à se protéger contre les attaques d'injection de code, type [XSS](https://fr.wikipedia.org/wiki/Cross-site_scripting).

---

## TL;DR

- Le JSX est une syntaxe permettant d'écrire du code Javascript représentant une structure HTML
- Le JSX n'est pas obligatoire pour utiliser React
- Le JSX n'est pas du HTML, mais du JS
- Il est nécessaire de compiler le JSX en JS pur, via des outils comme Babel
- Du JSX représente des objets JS
- Le JSX échappe les caractères potentiellement dangereux

Dans du JSX,

- il faut encadrer toute expression par des accolades `{}`
- vous pouvez donner des "attributs" aux composants comme pour le HTML
- l'attribut `class` est remplacé par `className`
- vous pouvez écouter les évènements classiques sur tous les composants standards, via `onEvent={maFonction}`
- les enfants sont "nestés" comme en HTML
- vous pouvez grouper du JSX dans des `<></>`

On recommande souvent l'utilisation de [coloration syntaxique adaptée](https://babeljs.io/docs/en/editors/) et du formatteur automatique de votre IDE pour vous aider à écrire du JSX.

## à suivre: [Let's go Pikachu !](./4_lets_go.md)

# La boucle de rendu

Le fonctionnement de React est basé sur 2 phases:
- la phase `render`
- la phase `commit`

## La phase `render`

Si React détecte qu'une donnée a changé dans une branche de l'arbre de composant, il va déclencher le rendu de tous les composants concerné.

Ce qu'on appelle le *rendu* est en réalité le rendu virtuel, c'est-à-dire la mise à jour du DOM virtuel.

Ce méchanisme est déclenché par l'exécution de la fonction du composant dont les données ont changé. Cette exécution déclenche par effet de cascade l'exécution de toutes les fonctions des composants enfants, avec éventuellement de nouvelles données.

**Si une donnée change dans un composant, ce composant ainsi que tous ses enfants vont être réévalués**: chacune des fonctions va être exécutée successivement. En revanche, les composants dans les autres branches de l'arbre ne seront pas rerendus.

SCHEMA PROPAGATION RENDER

L'exécution de toutes ces fonctions va permettre la mise à jour du DOM virtuel, qui est la représentation non concrète du DOM que l'on souhaite obtenir.

**À la fin de la phase `render`, le DOM virtuel est à jour, le DOM réel non**.

## La phase `commit`

La phase `commit` est la concrétisation du DOM virtuel dans le vrai DOM, tel qu'on l'a déjà commenté [ici](../1_introduction/3_principes).

Il s'agit de comparer le DOM virtuel avec le DOM réel, de détecter les changements uniquement strictement nécessaires, et de les appliquer sur le DOM réel, le tout pour faire le moins d'opérations possible.

## Cycle de vie

Une instance de composant passe par 3 étapes essentielles lors de sa vie:
- montage
- mise à jour
- démontage


### Montage

Lorsqu'une instance est ajoutée dans le DOM virtuel à la suite d'un `render`, on dit qu'elle est **montée** (*mounted*).

> On verra qu'on peut réagir au montage d'une instance pour faire des opérations particulières.

### Mise à jour

Si, après son montage initial, une instance est concernée par un autre `render`, elle est **mise à jour**.

Comme on l'a déjà dit, lors d'une mise à jour, la fonction d'une instance est rééxécutée en entier.

### Démontage

Si une instance disparaît du DOM virtuel à la suite d'un `render`, on dit qu'elle est **démontée** (*unmounted*).

> On verra qu'on peut réagir au démontage d'une instance pour faire des opérations particulières.

---

## TL;DR

- Lors d'une mise à jour, une phase `render` puis une phase `commit` sont déclenchées
- Le `render` permet la mise à jour du DOM virtuel
- Le `commit` permet d'appliquer les changements nécessaires sur le vrai DOM

---

## à suivre: [`State`](./2_state.md)

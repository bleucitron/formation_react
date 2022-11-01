# Bien utiliser les effets

## Fuites de mémoires

Utiliser `setX` dans un `useEffect` peut déclencher des fuites de mémoire, voire une boucle infinie.

## États dérivés

## Évènements vs effets

## Éviter les calculs lourds ?

## Effets asynchrones

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

## À suivre: [Les hooks](../5_hooks/index.md)

import trad from '../_data/fr.json';

export function translate(lang, name) {
  return lang === 'fr' ? trad[name] : name;
}

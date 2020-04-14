import { useState } from "react"
import { createContainer } from "unstated-next"
import cz from '../data/cz.js';
import de from '../data/de.js';
import es from '../data/es.js';
import fi from '../data/fi.js';
import fr from '../data/fr.js';
import hu from '../data/hu.js';
import ja from '../data/ja.js';
import pl from '../data/pl.js';

function useLanguage(initialLang = 'en') {
  const en = {};
  const availableLanguages = ['en', 'cz', 'de', 'es', 'fi', 'fr', 'hu', 'ja', 'pl'];
  const dictionaries = {
     'en': en,
     'cz': cz,
     'de': de,
     'es': es,
     'fi': fi,
     'fr': fr,
     'hu': hu,
     'ja': ja,
     'pl': pl
  };

  let [lang, setLang] = useState(initialLang);

  const setLanguage = (newLang: string) => {
    if (dictionaries.hasOwnProperty(newLang)) {
      setLang(newLang);
    } else {
      setLang('en');
    }
    // saveSettings("language", lang);
  }

  // translation function
  const t = (str: string) => {
    if (dictionaries[lang].hasOwnProperty(str)) {
      return dictionaries[lang].str;
    }
    // default to hard-coded English
    return str;
  }
  
  return { t, lang, setLanguage, availableLanguages }
}

let Language = createContainer(useLanguage);

export default Language;

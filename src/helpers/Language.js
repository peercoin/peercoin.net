import i18n from 'i18next';

export function getAvailableLanguages() {
  return [
    'en-US',
    // 'pt-BR'
  ];
}

export function getCurrentLanguage() {
  const languages = getAvailableLanguages();

  if (languages.includes(i18n.language)) {
    return i18n.language;
  }

  return languages[languages.length - 1];
}

export function getCurrentFlag() {
  let lang = getCurrentLanguage();
  let flagName = '';

  const map = {
    en: 'US',
    pt: 'BR',
  };

  if (map[lang.split('-')[0]] !== undefined) {
    return map[lang.split('-')[0]];
  }

  return lang.split('-')[1].toString().toUpperCase();
}
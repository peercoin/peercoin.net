import i18n from 'i18next';

export function getAvailableLanguages() {
  return [
    'en-US',
    'pt-BR',
    'cn',
    'de',
    'es',
    'fr',
    'kr',
    'pt',
    'pl',
    'ro'
  ];
}

export function getCurrentLanguage() {
  const languages = getAvailableLanguages();

  if (languages.includes(i18n.language)) {
    return i18n.language;
  }

  return languages[0];
}

export function getCurrentFlag() {
  let lang = getCurrentLanguage();

  if (lang.includes('-')) {
    return lang.split('-')[1].toUpperCase();
  }

  return lang.toUpperCase();
}
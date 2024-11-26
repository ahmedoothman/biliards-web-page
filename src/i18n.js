import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';
import store from './store/index';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: store.getState().uiSlice.lang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (newLang) => {
  i18next.changeLanguage(newLang);
  store.dispatch({ type: 'ui/setLang', payload: newLang });
};

export default i18next;

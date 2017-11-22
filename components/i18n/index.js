import i18next from 'i18next';
// import esTranslation from '../../i18n/es.json';
// import enTranslation from '../../i18n/en.json';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'en' | 'es',
    // Using simple hardcoded resources for simple example
    resources: {
      en: {
        translation: {
          age: { label: 'Age', },
          home: { label: 'Home', },
          name: { label: 'Name', },
        },
      },
      es: {
        translation: {
          age: { label: 'Años', },
          home: { label: 'Casa', },
          name: { label: 'Nombre', },
        },
      },
    },
  })

export default i18next
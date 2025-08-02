import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to My Portfolio',
      skills: 'Skills',
      frontend: 'Frontend (React)',
      backend: 'Backend (Node.js)',
      csharp: 'C# Language',
      uiux: 'UI/UX',
      contact: 'Contact Me',
      language: 'Language',
      projects: 'Projects',
      about: 'About Me',
      my_resume: 'My Resume',
      get_project: 'Get a project',
      website_dev: 'Website Development',
      app_dev: 'App Development',
      hosting: 'Website Hosting',
      about_me: 'About Me',
      completed: 'Completed Projects',
      satisfaction: 'Satisfaction Rate',
      years_exp: 'Years Experience',
      projects_section: 'Projects',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 
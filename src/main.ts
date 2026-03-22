import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

const styles = {
  title: 'font-size: 16px; font-weight: bold; color: #6B0F1A;',
  text: 'font-size: 12px; color: #7A3E1D;',
  link: 'font-size: 12px; color: #6B0F1A; text-decoration: underline;'
};

console.log('%c Desenvolvido por Kayki Letieri ', styles.title);
console.log('%c 📧 letieri.dev@gmail.com', styles.text);
console.log('%c 💼 https://www.linkedin.com/in/kaykiletieri/', styles.link);
console.log('%c 🐙 https://github.com/users/kaykiletieri', styles.link);

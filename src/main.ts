import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { OlaMundo } from './app/components/ola-mundo/ola-mundo';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

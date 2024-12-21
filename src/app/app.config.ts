import { ApplicationConfig } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';
import { PathLocationStrategy, LocationStrategy } from '@angular/common'; // Импортируем PathLocationStrategy
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    { provide: LocationStrategy, useClass: PathLocationStrategy } // Настроим PathLocationStrategy
  ]
};

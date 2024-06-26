import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {authInterceptorProvider} from "@interceptors/Auth/auth.interceptor";


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
    authInterceptorProvider
  ]
};

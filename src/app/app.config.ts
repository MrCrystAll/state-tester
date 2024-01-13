import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {provideRouter} from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { actionReducer } from './store/store.reducers';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideStore(), 
    provideState('actions', actionReducer),
    provideStoreDevtools({ maxAge: 25}),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch())
  ]
};

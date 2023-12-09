import { ApplicationConfig, isDevMode } from '@angular/core';
import {provideRouter, withComponentInputBinding, withRouterConfig} from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { actionReducer } from './store/store.reducers';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideStore(), 
    provideState({name: "actions", reducer: actionReducer}),
    provideStoreDevtools({ maxAge: 25})
  ]
};

import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app.routes';
 
export const appConfig = {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(CommonModule, HttpClientModule)
  ]
};
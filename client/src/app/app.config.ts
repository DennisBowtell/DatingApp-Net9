import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { platformBrowser } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    //does not import automatically
    provideAnimations(),
    //npm install ngx-toastr  -  https://npmjs.com/package/ngx-toastr
    provideToastr({
      positionClass: 'toast-bottom-right'
    })
  ]
};

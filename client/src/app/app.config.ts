import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { platformBrowser } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './_interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([errorInterceptor])),
    //does not import automatically
    provideAnimations(),
    //npm install ngx-toastr  -  https://npmjs.com/package/ngx-toastr
    provideToastr({
      positionClass: 'toast-bottom-right'
    })
  ]
};

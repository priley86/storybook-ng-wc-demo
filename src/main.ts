import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { whenWebComponentsReady } from './@skatejs/web-components';

if (environment.production) {
  enableProdMode();
}

whenWebComponentsReady().then(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});

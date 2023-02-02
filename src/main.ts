import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// above app (3). (2)the platformBrowserDynamic checks if service is provided
//(1) nullInjector error => no provider exists
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

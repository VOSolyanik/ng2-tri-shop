import { bootstrap }            from '@angular/platform-browser-dynamic'
import { LocationStrategy, 
         HashLocationStrategy } from '@angular/common'
import { HTTP_PROVIDERS, 
         XHRBackend }           from '@angular/http'
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { InMemoryBackendService, 
         SEED_DATA }            from 'angular2-in-memory-web-api';
import { InMemoryService }      from '../api/in-memory.service';


import { APP_ROUTER_PROVIDERS } from './app.routes'
import { AppComponent }         from './app.component'

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,     
    APP_ROUTER_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy},    // #
    { provide: XHRBackend, useClass: InMemoryBackendService},    // in-mem server
    { provide: SEED_DATA, useClass: InMemoryService}             // in-mem server data
])
.catch(err => console.error(err));
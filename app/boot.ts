import { bootstrap }            from '@angular/platform-browser-dynamic'
import { LocationStrategy, 
         HashLocationStrategy } from '@angular/common'
import { HTTP_PROVIDERS}        from '@angular/http'

import { AppComponent }         from './app.component'

bootstrap(AppComponent, [
    HTTP_PROVIDERS,     
    { provide: LocationStrategy, useClass: HashLocationStrategy}    // #
])
.catch(err => console.error(err));
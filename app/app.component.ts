import { Component }                from '@angular/core'

import { ROUTER_DIRECTIVES }        from '@angular/router'

@Component({
    selector: 'my-app',
    directives: [
        ROUTER_DIRECTIVES
    ], 
    providers: [],
    template: `
    <div class="container">
        <h2 class="text-center">Angular 2 TriShop</h2>
    </div>
    `
})

export class AppComponent {}

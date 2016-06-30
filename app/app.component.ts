import { Component }            from '@angular/core'
import { ROUTER_DIRECTIVES }    from '@angular/router'


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES], 
    providers: [],
    template: `
    <div class="container">
        <h3>My awesome shop</h3>
    </div>
    `
})

export class AppComponent {}

import { Component }                from '@angular/core'

import { ROUTER_DIRECTIVES }        from '@angular/router'

import { NavBarComponent }          from './shared'

import { ProductsService }          from './products'
import { CartService }              from './cart'
import { CategoriesService }        from './categories'

@Component({
    selector: 'my-app',
    directives: [
        ROUTER_DIRECTIVES, 
        NavBarComponent
    ], 
    providers: [
        CategoriesService,
        ProductsService
    ],
    template: `
    <navbar></navbar>
    <div class="container" style="padding-top: 70px">
        <router-outlet></router-outlet>
    </div>
    `
})

export class AppComponent {}

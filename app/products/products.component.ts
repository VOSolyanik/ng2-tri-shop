import { Component }                from '@angular/core';
import { ROUTER_DIRECTIVES }        from '@angular/router';

import { CategoriesBarComponent }   from '../categories'
         
import { ProductListComponent }     from './'

@Component({
    selector: 'products',
    directives: [
        ROUTER_DIRECTIVES,
        CategoriesBarComponent
    ], 
    templateUrl: 'app/products/products.component.html'
})

export class ProductsComponent {}
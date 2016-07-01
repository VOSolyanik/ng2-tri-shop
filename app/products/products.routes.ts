import { provideRouter, 
         RouterConfig }         from '@angular/router';

import { ProductsComponent, 
         ProductListComponent } from './'

export const ProductsRoutes: RouterConfig = [
    { 
        path: 'products', 
        component: ProductsComponent,
        children: [
            { path: '', component: ProductListComponent }
        ]
    }
];
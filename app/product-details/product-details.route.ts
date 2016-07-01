import { provideRouter, 
         RouterConfig }             from '@angular/router';

import { ProductDetailsComponent}  from './'

export const ProductDetailsRoutes: RouterConfig = [
    { 
        path: 'product/:id', 
        component: ProductDetailsComponent
     }
];
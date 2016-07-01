import { provideRouter,
         RouterConfig}      from '@angular/router';

import { CartComponent }    from './cart.component'
import { CartService }      from './cart.service'
import { CartGuard }        from './cart.guard'

export const CartRoutes: RouterConfig = [
    { path: 'cart', component: CartComponent/*, canActivate: [CartGuard]*/ } 
];

export const CART_PROVIDERS = [CartService, CartGuard]


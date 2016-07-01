import { provideRouter, 
         RouterConfig }             from '@angular/router'

import { ProductsRoutes }           from './products'
import { ProductDetailsRoutes  }    from './product-details'
import { DashboardRoutes }          from './dashboard/dashboard.routes'
import { CartRoutes, 
         CART_PROVIDERS }           from './cart'

export const routes: RouterConfig = [
    ...DashboardRoutes,
    ...ProductsRoutes,
    ...ProductDetailsRoutes,
    ...CartRoutes,
    { path: '*other', redirectTo: '' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  CART_PROVIDERS
];
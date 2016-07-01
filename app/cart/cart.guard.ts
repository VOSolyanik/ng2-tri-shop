import { Injectable }             from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';

import { CartService }            from './cart.service';

@Injectable()
export class CartGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(
    next:  ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this.cartService.getItems().length) { return true; }
      this.router.navigate(['/products']);
    return false;
  }
}
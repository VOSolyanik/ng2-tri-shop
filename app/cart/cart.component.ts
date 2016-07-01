import { Component, 
         OnInit, 
         OnDestroy }            from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';

import { CartItem, 
         Cart, 
         CartService, 
         CartItemComponent }    from './'
import { OrderFormComponent,
         OrderFormMDComponent } from './'

@Component({
    selector: 'cart',
    directives: [
        ROUTER_DIRECTIVES,
        CartItemComponent,
        OrderFormComponent,
        OrderFormMDComponent
    ], 
    templateUrl: 'app/cart/cart.component.html'
})

export class CartComponent implements OnDestroy, OnInit {
    isOrdering: boolean = false
    isOrdered: boolean = false
    cart: Cart
    private _cartSubscr: any

    constructor(private _cartService:CartService) {}

    onSubmit(buyer): void {
        this.isOrdering = false;
        this.isOrdered = true;
        console.log('Greate!!!', {buyer, items: this.cart.items});
    }

    ngOnInit() {
        this._cartSubscr = this._cartService.cart.subscribe(cart => this.cart = cart);
        this._cartService.fetchCart();
    }

    ngOnDestroy() {
        this._cartSubscr.unsubscribe();
    }
}
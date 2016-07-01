import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CartService } from '../../../cart'

@Component({
    directives: [ROUTER_DIRECTIVES], 
    selector: 'navbar',
    styles: [`
        .navbar-center{
            margin-left: 50%;
            transform: translateX(-100%);
        }
    `],
    templateUrl: 'app/shared/components/navbar/navbar.component.html'
})

export class NavBarComponent implements OnInit, OnDestroy {
    cartItemsCount: number = 0
    cartItemsPrice: number = 0

    private _cartSubscr: any

    constructor(
        private _cartService: CartService,
        private el: ElementRef
    ) {

    }

    subscribeOnCart() {
        this._cartSubscr = this._cartService.cart.subscribe(cart => {
            this.cartItemsCount = cart.totalAmount;
            this.cartItemsPrice = cart.totalPrice;
        });
    }

    ngOnInit() {
        this.subscribeOnCart()   
    }

    ngOnDestroy() {
        this._cartSubscr.unsubscribe();
    }
}
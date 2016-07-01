import { Component, 
         Input }                    from '@angular/core';
import { ROUTER_DIRECTIVES }        from '@angular/router';

import { ImagePreloaderDirective }  from '../../shared'
import { CartItem, 
         CartService }              from '../'

@Component({
    selector: 'cart-item',
    directives: [
        ROUTER_DIRECTIVES,
        ImagePreloaderDirective
    ], 
    templateUrl: 'app/cart/cart-item/cart-item.component.html'
})

export class CartItemComponent {
    @Input() cartItem: CartItem
    @Input() itemDisabled: boolean = false;

    constructor(private _cartService:CartService) {}

    changeItemAmount(amount: number): void {
        if(amount){
            if(+amount >= 0) {
                this.cartItem.amount = +amount;
            } else {
                this.cartItem.amount = 0;
            }
            this._cartService.setItemAmount(this.cartItem);
        } 
    }

    onBlur(value: any): void {
        if(!value || +value < 0)
            this.cartItem.amount = 0;
            this._cartService.setItemAmount(this.cartItem);
    }

    deleteItem(): void {
        this._cartService.removeItem(this.cartItem);
    }

}
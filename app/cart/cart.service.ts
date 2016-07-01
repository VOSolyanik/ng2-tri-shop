import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Observer }   from 'rxjs/Observer'
import { share }      from 'rxjs/operator/share'

import { Product }    from '../products';
import { CartItem }   from './';
import { Cart }       from './';

@Injectable()
export class CartService {
    private _cart: Cart
    private _cartObserver: Observer<Cart>
    public cart: Observable<Cart>

    constructor() {
        this._cart = { 
            items: [],
        	totalPrice: 0,
        	totalAmount: 0
        }
        this.cart = new Observable<Cart>(observer => this._cartObserver = observer).share();
    }

    fetchCart() {
        this._calcTotals();
        this._cartObserver.next(this._cart);
    }

    private _calcTotals() {
        this._cart.totalPrice = 0;
        this._cart.totalAmount = 0;
        this._cart.items.forEach(item => {
            this._cart.totalAmount += item.amount;
            this._cart.totalPrice += item.amount*item.product.price;
        });
    }

    addItem(product: Product) {
        let existing = this._cart.items.find(item => item.product.id === product.id);
        if(!existing) {
            this._cart.items.push(new CartItem(product));
        } else {
            existing.amount += 1;
        }
        this.fetchCart();
    }

    removeItem(item: CartItem) {
        let index = this._cart.items.findIndex(cartItem => cartItem.product.id == item.product.id);
        this._cart.items.splice(index, 1);
        this.fetchCart();
    }

    setItemAmount(item: CartItem) {
        let currentItem = this._cart.items.find(cartItem => cartItem.product.id === item.product.id);
        this.fetchCart();
    }

    getItems() {
        return this._cart.items;
    }
}
import { Component, Input} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Product, ProductsService } from '../'
import { CartService }      from '../../cart'
import { ImagePreloaderDirective } from '../../shared'

@Component({
    selector: 'product-item',
    directives: [
        ROUTER_DIRECTIVES,
        ImagePreloaderDirective
    ], 
    styleUrls: ['app/products/product-item/product-item.component.css'],
    templateUrl: 'app/products/product-item/product-item.component.html'
})

export class ProductItemComponent {
    @Input() product: Product

    constructor(private _cart: CartService) {}

    addToCart(product: Product) {
        this._cart.addItem(product);
    }
}
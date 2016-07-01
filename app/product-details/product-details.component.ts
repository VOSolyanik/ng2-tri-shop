import { Component, 
         OnInit, 
         OnDestroy }            from '@angular/core';
import { ActivatedRoute, 
         ROUTER_DIRECTIVES }    from '@angular/router';
import { Subscription }         from 'rxjs/Subscription';

import { SpinnerComponent,
         TabComponent,
         TabsComponent }        from '../shared';
import { Product,
         ProductModel,
         ProductsService }      from '../products';
import { CartService }          from '../cart';

@Component({
    selector: 'product-details',
    directives: [
        ROUTER_DIRECTIVES, 
        SpinnerComponent,
        TabComponent,
        TabsComponent
    ], 
    styleUrls: ['app/product-details/product-details.component.css'],
    templateUrl: 'app/product-details/product-details.component.html'
})

export class ProductDetailsComponent implements OnInit, OnDestroy {
    isLoading: boolean = true;
    product: Product;    
    sub: Subscription

    constructor(
        private _productsService: ProductsService,
        private _cartService: CartService,
        private _route: ActivatedRoute
    ) {
        this.product = new ProductModel();    
    }

    ngOnInit() {
        this.sub = this._route.params
            .map(params => +params['id'])
            .subscribe((id: number) => {
                this.getProduct(id);
            })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        if(!id) return;

        this._productsService.getProduct(id)
            .subscribe(product => {
                this.isLoading = false;
                this.product = product
            });
    }

    getShortDescription(): string {
        if(!this.product.id) return;

        return this.product.description.slice(0, 50) + '...';
    }

    addToCart(product: Product) {
        this._cartService.addItem(product);
    }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operator/map';

import { MyFilterPipe } from '../../shared';
import { SpinnerComponent } from '../../shared';
import { Product, ProductsService, ProductItemComponent } from '../';

@Component({
    selector: 'products-list',
    directives: [
        ProductItemComponent,
        SpinnerComponent
    ], 
    pipes: [MyFilterPipe],
    templateUrl: 'app/products/product-list/product-list.component.html'
})

export class ProductListComponent implements OnInit, OnDestroy {
    private sub: any;

    isLoading: boolean = true
    selectedCategoryId: number = null
    products: Product[] = []

    constructor(
        private _productsService: ProductsService,
        private _router: Router
    ) {}

    ngOnInit() {
        this.getProducts();

        this.sub = this._router.routerState.queryParams
            .subscribe(params => {
                this.selectedCategoryId = +params['categoryId'];
                this.getProducts();
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProducts() {
        this._productsService.getProducts(this.selectedCategoryId)
            .subscribe(products => {
                this.isLoading = false;
                this.products = products;
            });
    }

}
import { Component,
         OnInit,
         OnDestroy }         from '@angular/core'
import { Router, 
         ROUTER_DIRECTIVES } from '@angular/router'
import { Subscription }      from 'rxjs/Subscription'

import { Category,
        CategoriesService }  from '../'

@Component({
    selector: 'categoriesbar',
    directives: [
        ROUTER_DIRECTIVES
    ], 
    styleUrls: ['app/categories/categories-bar/categories-bar.component.css'],
    templateUrl: 'app/categories/categories-bar/categories-bar.component.html'
})

export class CategoriesBarComponent implements OnInit, OnDestroy {
    title: string = "Products";
    categories: Category[] = [];
    selectedCategoryId: number = null;
    private sub: Subscription;

    constructor(
        private _router: Router, 
        private _categoriesService: CategoriesService
    ) {}

    changeTitle() {
        if(!this.selectedCategoryId || !this.categories.length) {
            this.title = "Products";
        } else {
            this.title = this.categories.find(cat => cat.id == this.selectedCategoryId).name;
        }
    }

    ngOnInit() {
        this._categoriesService.getCategories()
            .subscribe((categories: Category[]) => {
                this.categories = categories;
                this.changeTitle();
            });

        this.sub = this._router.routerState.queryParams
            .subscribe(params => {
                this.selectedCategoryId = +params['categoryId'];
                this.changeTitle();
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

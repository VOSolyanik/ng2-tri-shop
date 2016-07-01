import { Injectable }   from '@angular/core'
import { Http,
         Response }     from '@angular/http'
import { Observable }   from 'rxjs/Observable'
import { Observer }     from 'rxjs/Observer'
import { map }          from 'rxjs/operator/map'

import { Category }     from './category'

@Injectable() 
export class CategoriesService {
    private categories: Observable<Category[]>;
    private _categories: Category[] = [];
    private _categoriesObserver: Observer<Category[]>;

    constructor(private _http: Http) {
        this.categories = new Observable<Category[]>((observer: Observer<Category[]>) => {
            this._categoriesObserver = observer;
            
        });

        this._getCategoriesFromServer().subscribe(categories => {
            this._categories = categories;
            this._categoriesObserver.next(this._categories);
        })
    }

    private _getCategoriesFromServer(): Observable<Category[]> {
        return this._http.get('api/categories')
            .map((res: Response) => res.json().data)
    }

    public getCategories(): Observable<Category[]> {
        setTimeout(() => {
            this._categoriesObserver.next(this._categories);            
        });
        return this.categories;
    }
}
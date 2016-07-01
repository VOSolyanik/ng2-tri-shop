import { Injectable }       from '@angular/core'
import { Http, Response }   from '@angular/http'
import { Observable }       from 'rxjs/Observable'
import { map }              from 'rxjs/operator/map'

import { Product }          from './'

@Injectable() 

export class ProductsService {
    private baseUrl: string;
    constructor(private _http: Http) {
        this.baseUrl = 'api/products';
    }

    getProducts(categoryId: number): Observable<Product[]> {
        return this._http.get(`${this.baseUrl}`)
            .map((res: Response) => res.json().data)
            .map(products => {
                if(!categoryId)
                    return products;
                return products.filter(item => item.categoryId == categoryId)
            });
    }

    getProduct(id: number): Observable<Product> {

        return this._http.get(`${this.baseUrl}/${id}`)
            .map((res: Response) => res.json().data);
    }
}
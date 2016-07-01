import { Product } from '../../products'

export class  CartItem {
    product: Product
    amount: number = 1

    constructor(product: Product, amount?: number) {
        this.product = product;
    }
}
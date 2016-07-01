export interface Product {
    id: number
    name: string
    description: string
    imgUrl: string
    categoryId: number
    price: number
    isNew: boolean
    isInStock: boolean
    iLike: boolean
}

export class ProductModel implements Product {
    id: number
    name: string
    description: string
    imgUrl: string
    categoryId: number
    price: number
    isNew: boolean
    isInStock: boolean
    iLike: boolean

    constructor() {}
}
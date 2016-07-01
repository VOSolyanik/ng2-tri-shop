import { CartItem } from './'

export interface Cart {
    items: CartItem[]
    totalPrice: number
    totalAmount: number
}
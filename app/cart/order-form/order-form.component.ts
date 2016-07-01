import { Component, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Buyer } from './buyer';

@Component({
    selector: 'order-form',
    directives: [
        ROUTER_DIRECTIVES
    ], 
    styleUrls: ['app/cart/order-form/order-form.component.css'],
    templateUrl: 'app/cart/order-form/order-form.component.html'
})

export class OrderFormComponent {
    @Output() submitted: EventEmitter<Buyer> = new EventEmitter<Buyer>();
    model: Buyer = new Buyer('','','','','');

    onSubmit(value): void {
        console.log(value)
        this.submitted.emit(this.model);
    }
}
import { Component, 
         OnInit, 
         Output, 
         EventEmitter } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES,
         FormBuilder,
         FormGroup, 
         Validators } from '@angular/forms';

@Component({
    selector: 'order-form-md',
    directives: [
        REACTIVE_FORM_DIRECTIVES
    ], 
    styleUrls: ['app/cart/order-form-md/order-form-md.component.css'],
    templateUrl: 'app/cart/order-form-md/order-form-md.component.html'
})

export class OrderFormMDComponent implements OnInit  {
    @Output() submitted = new EventEmitter();

    orderForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.orderForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: [],
            address: [],
            phone: ['', Validators.required]
        });
    }

    onSubmit(): void {
        this.submitted.emit(this.orderForm.value);
    }
}
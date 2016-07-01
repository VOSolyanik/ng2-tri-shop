import { Component } from '@angular/core';

@Component({
    selector: 'spinner',
    styles: [`
        .fa-spinner{
            display: block;
            width: 48px;
            height: 48px;
            margin: 0 auto;
        }
    `],
    templateUrl: 'app/shared/components/spinner/spinner.component.html'
})

export class SpinnerComponent {}
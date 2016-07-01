import { provideRouter, 
         RouterConfig }             from '@angular/router';

import { DashboardComponent }  from './dashboard.component'

export const DashboardRoutes: RouterConfig = [
    { path: '', component: DashboardComponent, terminal: true } 
];
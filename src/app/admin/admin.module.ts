import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminAppComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class AdminModule { }

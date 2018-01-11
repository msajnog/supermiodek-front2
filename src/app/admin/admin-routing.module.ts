import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from './admin-guard.service';
import { OrdersComponent } from './orders/orders.component';

const recipesRoutes: Routes = [
  { path: 'admin', canActivate: [AdminGuard], children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full'},
      { path: 'orders', component: OrdersComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AdminGuard
  ]
})
export class AdminRoutingModule {}

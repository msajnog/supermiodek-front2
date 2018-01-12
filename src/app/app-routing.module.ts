import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PublicAppComponent } from './public/public-app/public-app.component';
import { AdminAppComponent } from './admin/admin-app/admin-app.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AdminGuard } from './admin/admin-guard.service';
import { ShopComponent } from './public/shop/shop.component';
import { AuthComponent } from './public/auth/auth.component';
import { HomeComponent } from './public/home/home.component';

const appRoutes: Routes = [
  {
    path: 'admin', component: AdminAppComponent, canActivate: [AdminGuard], children:
      [
        {path: '', redirectTo: 'orders', pathMatch: 'full'},
        {path: 'orders', component: OrdersComponent}
      ]
  },
  {
    path: '', component: PublicAppComponent, children:
      [
        {path: '', component: HomeComponent},
        {path: 'sklep', component: ShopComponent},
        {path: 'logowanie', component: AuthComponent}
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AdminGuard
  ]
})
export class AppRoutingModule {
}

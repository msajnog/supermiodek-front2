import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { ShopComponent } from './public/shop/shop.component';
import { AuthComponent } from './public/auth/auth.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sklep', component: ShopComponent },
  { path: 'logowanie', component: AuthComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

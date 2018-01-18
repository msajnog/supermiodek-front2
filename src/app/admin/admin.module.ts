import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { AdminAppEffects } from './admin-app/store/admin-app.effects';

@NgModule({
  declarations: [
    AdminAppComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    EffectsModule.forFeature([AdminAppEffects])
  ],
})
export class AdminModule { }

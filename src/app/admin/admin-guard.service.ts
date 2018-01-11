import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.interface';
import { AuthState } from '../public/auth/auth.interface';

@Injectable()
export class AdminGuard {

  constructor (private store: Store<fromApp.AppState>,
               private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
      .take(1)
      .map((authState: AuthState) => {
        if (authState.authenticated) {
          return true;
        } else {
          this.router.navigate(['']);
        }
      });
  }
}

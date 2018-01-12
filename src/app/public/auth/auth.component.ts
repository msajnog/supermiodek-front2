import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthActions from './store/auth.actions';
import * as fromApp from '../../store/app.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  authorization: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) {
    this.loginForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.authorization = this.store.select('auth').subscribe(auth => {
      if (auth.authenticated) {
        this.router.navigate(['/admin']);
      }
    });
  }

  ngOnDestroy() {
    this.authorization.unsubscribe();
  }

  onSignin() {
    this.store.dispatch(new AuthActions.SignIn(this.loginForm.value));
  }
}

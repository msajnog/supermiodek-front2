import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthActions from './store/auth.actions';
import * as fromApp from '../../store/app.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>) {
    this.loginForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
  }

  onSignin() {
    console.log('loginForm', this.loginForm.value);
    this.store.dispatch(new AuthActions.SignIn(this.loginForm.value));
  }
}

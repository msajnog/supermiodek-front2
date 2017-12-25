import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Product } from '../core/product/product.interface';
import * as fromApp from '../store/app.interface';
import * as ProductActions from '../home/store/home.actions';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  orderForm: FormGroup;
  productsState: Observable<Product[]> = this.store.select('home', 'products');

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new ProductActions.FetchProducts());

    this.orderForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'surname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.pattern('\\d+'), Validators.minLength(9)]),
      'shipping': new FormControl(null, [Validators.required]),
      'comment': new FormControl()
    });
  }

}

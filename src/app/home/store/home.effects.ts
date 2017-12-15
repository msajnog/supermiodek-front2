import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as ProductActions from './home.actions';
import { ProductResponse } from '../../core/product/product.interface';

@Injectable()
export class ProductEffects {
  @Effect()
  productFetch = this.action$
    .ofType(ProductActions.FETCH_PRODUCTS)
    .switchMap((action: ProductActions.FetchProducts) => {
      return this.httpClient.get<ProductResponse>('/api/products', {
        observe: 'body',
        responseType: 'json',
      });
    })
    .map(
      (products) => {
        return {
          type: ProductActions.SET_PRODUCTS,
          payload: products.data
        };
      }
    );

  constructor(private action$: Actions,
              private httpClient: HttpClient) {}
}

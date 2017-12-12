import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';

import * as HomeActions from './home.actions';
import { Product } from '../../core/product/product.interface';

export class HomeEffects {
  @Effect()
  productFetch = this.action$
    .ofType(HomeActions.FETCH_PRODUCTS)
    .switchMap((action: HomeActions.FetchProducts) => {
      return this.httpClient.get<Product[]>('https://ng-recipe-book-d00e0.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json',
      });
    });

  constructor(private action$: Actions,
              private httpClient: HttpClient) {}
}

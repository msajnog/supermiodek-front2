import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.interface';
import * as fromHome from '../public/home/store/home.reducers';
import * as fromFooter from '../public/core/footer/store/footer.reducers';
import * as fromShop from '../public/shop/store/shop.reducers';
import * as fromAuth from '../public/auth/store/auth.reducers';


export const rootReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  home: fromHome.homeReducer,
  shop: fromShop.shopReducer,
  footer: fromFooter.footerReducer,
};

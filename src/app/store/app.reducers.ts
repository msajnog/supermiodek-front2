import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.interface';
import * as fromHome from '../public/home/store/home.reducers';
import * as fromFooter from '../public/core/footer/store/footer.reducers';
import * as fromShop from '../public/shop/store/shop.reducers';


export const rootReducer: ActionReducerMap<AppState> = {
  home: fromHome.homeReducer,
  shop: fromShop.shopReducer,
  footer: fromFooter.footerReducer,
};

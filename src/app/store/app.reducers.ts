import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.interface';
import * as fromHome from '../home/store/home.reducers';
import * as fromFooter from '../core/footer/store/footer.reducers';


export const rootReducer: ActionReducerMap<AppState> = {
  home: fromHome.homeReducer,
  footer: fromFooter.footerReducer
};

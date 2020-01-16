import { Product } from '../public/core/product/product.interface';
import { ContactData } from '../public/core/footer/footer.interface';
import {Photo, Temperature} from '../public/home/home.interface';
import { Order, ShipmentMethod } from '../public/shop/shop.interface';

export interface AppState {
  auth: {
    authenticated: boolean;
    token: string;
  };
  home: {
    galleryPhotos: Photo[];
    products: Product[];
    temperatures: Temperature[];
  };
  shop: {
    shipmentMethods: ShipmentMethod[];
    orderData: Order
    orderDataSend: boolean;
  };
  footer: {
    contactData: ContactData;
    contactDataSend: boolean
  };
}

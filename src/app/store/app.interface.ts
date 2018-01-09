import { Product } from '../core/product/product.interface';
import { ContactData } from '../core/footer/footer.interface';
import { Photo } from '../home/home.interface';
import { Order, ShipmentMethod } from '../shop/shop.interface';

export interface AppState {
  home: {
    galleryPhotos: Photo[];
    products: Product[];
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

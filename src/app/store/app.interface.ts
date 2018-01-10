import { Product } from '../public/core/product/product.interface';
import { ContactData } from '../public/core/footer/footer.interface';
import { Photo } from '../public/home/home.interface';
import { Order, ShipmentMethod } from '../public/shop/shop.interface';

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

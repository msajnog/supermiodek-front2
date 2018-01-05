import { Product } from '../core/product/product.interface';
import { ContactData } from '../core/footer/footer.interface';
import { Photo } from '../home/home.interface';
import { ShipmentMethod } from '../shop/shop.interface';

export interface AppState {
  home: {
    galleryPhotos: Photo[];
    products: Product[];
  };
  shop: {
    shipmentMethods: ShipmentMethod[];
  };
  footer: {
    contactData: ContactData;
    contactDataSend: boolean
  };
}

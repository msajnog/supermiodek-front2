import { Product } from '../core/product/product.interface';
import { ContactData } from '../core/footer/footer.interface';
import { Photo } from '../home/home.interface';

export interface AppState {
  home: {
    galleryPhotos: Photo[];
    products: Product[];
  };
  footer: {
    contactData: ContactData;
    contactDataSend: boolean
  };
}

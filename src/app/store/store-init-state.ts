import { Product } from '../core/product/product.interface';
import { ContactData } from '../core/footer/footer.interface';
import { Photo } from '../home/home.interface';
import { ShipmentMethod } from '../shop/shop.interface';

export const appInitialState = {
  home: {
    galleryPhotos: <Photo[]>[
      {
        thumbnailUrl: 'assets/images/gallery_img_thumb1.jpg',
        photoUrl: 'assets/images/gallery_img1.jpg'
      },
      {
        thumbnailUrl: 'assets/images/gallery_img_thumb2.jpg',
        photoUrl: 'assets/images/gallery_img2.jpg'
      },
      {
        thumbnailUrl: 'assets/images/gallery_img_thumb3.jpg',
        photoUrl: 'assets/images/gallery_img3.jpg'
      },
      {
        thumbnailUrl: 'assets/images/gallery_img_thumb4.jpg',
        photoUrl: 'assets/images/gallery_img4.jpg'
      },
      {
        thumbnailUrl: 'assets/images/gallery_img_thumb5.jpg',
        photoUrl: 'assets/images/gallery_img5.jpg'
      },
      {
        thumbnailUrl: 'assets/images/gallery_img_thumb6.jpg',
        photoUrl: 'assets/images/gallery_img6.jpg'
      },
    ],
    products: <Product[]>[]
  },
  shop: {
    shipmentMethods: <ShipmentMethod[]>[],
  },
  footer: {
    contactData: <ContactData>{
      name: null,
      email: null,
      phone: null,
      subject: null,
      content: null,
      sendCopy: null
    },
    contactDataSend: false,
  }
};
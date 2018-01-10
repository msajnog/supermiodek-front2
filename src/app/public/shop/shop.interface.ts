import { Product } from '../core/product/product.interface';

export interface ShipmentMethodResponse {
  status: boolean;
  data: ShipmentMethod[];
}

export interface ShipmentMethod {
  _id: string;
  name: string;
  price: number;
}

export interface Order {
  name: string;
  surname: string;
  email: string;
  phone: string;
  shipping: string;
  comment: string;
  products: Product[];
}

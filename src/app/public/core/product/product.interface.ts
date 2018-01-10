export interface ProductResponse {
  status: boolean;
  data: Product[];
}

export interface Product {
  _id: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  price: string;
  status: string;
  availability: number;
  quantity?: number;
}

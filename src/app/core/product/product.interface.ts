export interface ProductResponse {
  status: boolean;
  data: Product[];
}

export interface Product {
  name: string;
  image: string;
  shortDescription: string;
  longDescription: string;
}

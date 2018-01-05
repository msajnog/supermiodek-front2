export interface ShipmentMethodResponse {
  status: boolean;
  data: ShipmentMethod[];
}

export interface ShipmentMethod {
  _id: string;
  name: string;
  price: number;
}

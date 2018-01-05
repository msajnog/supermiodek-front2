import { ShipmentMethod } from '../shop.interface';

export const GET_SHIPMENT_METHODS = 'GET_SHIPMENT_METHODS';
export const SET_SHIPMENT_METHODS = 'SET_SHIPMENT_METHODS';

export class GetShipmentMethods {
  readonly type = GET_SHIPMENT_METHODS;
}

export class SetShipmentMethods {
  readonly type = SET_SHIPMENT_METHODS;

  constructor(public payload: ShipmentMethod[]) {}
}

export type ShopActions = GetShipmentMethods | SetShipmentMethods;

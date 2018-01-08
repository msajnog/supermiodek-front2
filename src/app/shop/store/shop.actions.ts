import { ShipmentMethod } from '../shop.interface';

export const GET_SHIPMENT_METHODS = 'GET_SHIPMENT_METHODS';
export const SET_SHIPMENT_METHODS = 'SET_SHIPMENT_METHODS';
export const PLACE_ORDER = 'PLACE_ORDER';

export class GetShipmentMethods {
  readonly type = GET_SHIPMENT_METHODS;
}

export class SetShipmentMethods {
  readonly type = SET_SHIPMENT_METHODS;

  constructor(public payload: ShipmentMethod[]) {}
}

export class PlaceOrder {
  readonly type = PLACE_ORDER;
  constructor(public payload) {}
}

export type ShopActions = GetShipmentMethods | SetShipmentMethods | PlaceOrder;

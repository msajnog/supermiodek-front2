import { ShipmentMethod } from '../shop.interface';

export const GET_SHIPMENT_METHODS = 'GET_SHIPMENT_METHODS';
export const SET_SHIPMENT_METHODS = 'SET_SHIPMENT_METHODS';
export const PLACE_ORDER = 'PLACE_ORDER';
export const SET_ORDER_FORM_STATUS = 'SET_ORDER_FORM_STATUS';

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

export class SetOrderFormStatus {
  readonly type = SET_ORDER_FORM_STATUS;

  constructor(public payload: boolean) {}
}

export type ShopActions = GetShipmentMethods | SetShipmentMethods | PlaceOrder | SetOrderFormStatus;

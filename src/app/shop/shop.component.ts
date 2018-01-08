import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Product } from '../core/product/product.interface';
import * as fromApp from '../store/app.interface';
import * as ProductActions from '../home/store/home.actions';
import * as ShopActions from './store/shop.actions';
import { ShipmentMethod } from './shop.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {
  orderForm: FormGroup;
  products: Product[] = [];
  productsState: Subscription;
  shipmentMethodsState: Subscription; // Observable<ShipmentMethod[]> = this.store.select('shop', 'shipmentMethods');
  shipmentMethods;
  productsTotal = 0;
  total = 0;
  productsOrdered = false;

  constructor(private store: Store<fromApp.AppState>,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.store.dispatch(new ProductActions.FetchProducts());
    this.store.dispatch(new ShopActions.GetShipmentMethods());

    this.productsState = this.store.select('home', 'products')
      .subscribe(
        (products: Product[]) => {
          this.initForm(products);
        }
      );

    this.shipmentMethodsState = this.store.select('shop', 'shipmentMethods')
      .subscribe(
        (shipmentMethods: ShipmentMethod[]) => {
          this.shipmentMethods = shipmentMethods;
        }
      );
  }

  ngOnDestroy() {
    this.productsState.unsubscribe();
    this.shipmentMethodsState.unsubscribe();
  }

  initForm(products: Product[]) {
    const productsGroup = new FormArray([]);
    if (products) {
      products.forEach(product => {
        productsGroup.push(
          new FormGroup({
            '_id': new FormControl(product._id),
            'name': new FormControl(product.name, Validators.required),
            'image': new FormControl(product.image, Validators.required),
            'availability': new FormControl(product.availability, Validators.required),
            'status': new FormControl(product.status, Validators.required),
            'price': new FormControl(product.price, Validators.required),
            'description': new FormControl(product.description, Validators.required),
            'shortDescription': new FormControl(product.shortDescription, Validators.required),
            'quantity': new FormControl(0, [Validators.min(0), Validators.max(product.availability)]),
          })
        );
      });
    }
    this.orderForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'surname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.pattern('\\d+'), Validators.minLength(9)]),
      'shipping': new FormControl(null, [Validators.required]),
      'comment': new FormControl(),

      'products': productsGroup
    });
  }

  getControls() {
    return (<FormArray>this.orderForm.get('products')).controls;
  }

  increase(formGroupId: number) {
    const availability = (<FormArray>this.orderForm.get('products')).controls[formGroupId].get('availability').value;
    const newValue = (<FormArray>this.orderForm.get('products')).controls[formGroupId].get('quantity').value + 1;

    if (newValue <= availability) {
      (<FormArray>this.orderForm.get('products')).controls[formGroupId].get('quantity').setValue(newValue);

      this.calculateTotal();
    }
  }

  decrease(formGroupId: number) {
    const newValue = (<FormArray>this.orderForm.get('products')).controls[formGroupId].get('quantity').value - 1;

    if (newValue >= 0) {
      (<FormArray>this.orderForm.get('products')).controls[formGroupId].get('quantity').setValue(newValue);
      this.calculateTotal();
    }
  }

  calculateTotal() {
    const productsControls = (<FormArray>this.orderForm.get('products')).controls;
    this.productsTotal = 0;
    this.productsOrdered = false;
    productsControls.forEach(product => {
      let quantity = product.get('quantity').value;
      if (quantity < 0) {
        quantity = 0;
        product.get('quantity').setValue(0);
      }
      const price = product.get('price').value;
      this.productsTotal += (quantity * price);
      this.checkOrderedProducts(quantity);
    });

    this.productsTotal = +this.productsTotal.toFixed(2);
  }

  checkOrderedProducts(quantity: number) {
    if (quantity > 0) {
      this.productsOrdered = true;
    }
  }

  open(content) {
    this.total = this.productsTotal;
    this.orderForm.addControl('shipment', new FormControl(null, Validators.required));
    this.modalService.open(content).result.then(() => {
      this.orderForm.removeControl('shipment');
    }, () => {
      this.orderForm.removeControl('shipment');
    });
  }

  onMethodSelect(method) {
    this.total = (this.productsTotal + method.price).toFixed(2);
  }

  onSubmit() {
    const order = Object.assign({}, this.orderForm.value);
    [order.shipment] = this.shipmentMethods.filter(method => method._id === order.shipment);
  }
}

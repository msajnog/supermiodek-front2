import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Photo } from './home.interface';
import * as fromApp from '../store/app.interface';
import * as ProductActions from './store/home.actions';
import { Product } from '../core/product/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productsState: Observable<Product[]> = this.store.select('home', 'products');
  gallery: Observable<Photo[]> = this.store.select('home', 'galleryPhotos');
  modalPhoto: Photo;

  constructor(private modalService: NgbModal,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new ProductActions.FetchProducts());
  }

  open(content, photo: Photo) {
    this.modalPhoto = photo;
    this.modalService.open(content);
  }
}

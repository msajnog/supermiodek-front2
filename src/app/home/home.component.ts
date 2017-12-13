import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Photo } from './home.interface';
import * as fromApp from '../store/app.reducers';
import * as fromProducts from '../home/store/product.reducers';
import * as ProductActions from './store/product.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productsState: Observable<fromProducts.State> = this.store.select('products');

  gallery: Photo[] = [
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
  ];

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

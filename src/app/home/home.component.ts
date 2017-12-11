import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [
    {
      name: 'first product',
      url: 'https://www.gracefruit.com/uploads/images/products/large/gracefruit_gracefruit_honeyquat50solution_1460546582honeyflavouroil135894175550ffce3b1379a.jpg',
      shortDescription: 'lorem ipsum',
      longDescription: 'lorem ipsum',
    },
    {
      name: 'first product',
      url: 'https://www.gracefruit.com/uploads/images/products/large/gracefruit_gracefruit_honeyquat50solution_1460546582honeyflavouroil135894175550ffce3b1379a.jpg',
      shortDescription: 'lorem ipsum',
      longDescription: 'lorem ipsum',
    },
    {
      name: 'first product',
      url: 'https://www.gracefruit.com/uploads/images/products/large/gracefruit_gracefruit_honeyquat50solution_1460546582honeyflavouroil135894175550ffce3b1379a.jpg',
      shortDescription: 'lorem ipsum',
      longDescription: 'lorem ipsum',
    },
  ];

  gallery: any[] = [
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

  constructor() { }

  ngOnInit() {
  }

}

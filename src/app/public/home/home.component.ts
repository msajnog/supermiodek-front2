import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { ScrollToService } from 'ng2-scroll-to-el';

import { Photo, Temperature } from './home.interface';
import * as fromApp from '../../store/app.interface';
import * as ProductActions from './store/home.actions';
import { Product } from '../core/product/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  productsState: Observable<Product[]> = this.store.select('home', 'products');
  heatState: Observable<Temperature[]> = this.store.select('home', 'temperatures');
  heatSubscription;
  temperatures;
  minTemp: number = null;
  maxTemp: number = null;
  gallery: Observable<Photo[]> = this.store.select('home', 'galleryPhotos');
  gallerySubscription;
  galleryPhotos: Photo[];
  modalPhoto: Photo;
  width = 800;
  height = 560;
  view: number[] = [this.width, this.height];

  constructor(private modalService: NgbModal,
              private store: Store<fromApp.AppState>,
              private activatedRoute: ActivatedRoute,
              private scrollService: ScrollToService) {}

  ngOnInit(): void {
    this.store.dispatch(new ProductActions.FetchProducts());
    this.store.dispatch(new ProductActions.FetchTemperatures());

    this.gallerySubscription = this.gallery.subscribe((photos) => {
      this.galleryPhotos = photos;
    });

    this.activatedRoute.fragment.subscribe((fragment: string) => {
      setTimeout(() => {
        this.scrollService.scrollTo(`#${fragment}Section`, 500, -70);
      }, 0);
    });
  }

  ngAfterViewInit(): void {
    this.initHeatChart();
  }

  ngOnDestroy(): void {
    this.gallerySubscription.unsubscribe();
    this.heatSubscription.unsubscribe();
  }

  open(content, photo: Photo) {
    this.modalPhoto = photo;
    this.modalService.open(content);
  }

  goToImage(direction) {
    const activePhotoIndex = this.galleryPhotos.findIndex(value => this.modalPhoto.photoUrl === value.photoUrl);
    let newIndex = 0;

    if (direction === 'next') {
      newIndex = activePhotoIndex + 1 > this.galleryPhotos.length - 1 ? 0 : activePhotoIndex + 1;
    } else {
      newIndex = activePhotoIndex - 1 < 0 ? this.galleryPhotos.length - 1 : activePhotoIndex - 1;
    }

    this.modalPhoto = this.galleryPhotos[newIndex];
  }

  initHeatChart() {
    this.heatSubscription = this.heatState.subscribe((temps) => {

      if (temps.length) {
        this.temperatures = this.prepareDataForChart(temps);
      }
    });
  }

  prepareDataForChart(heatValues) {
    const newestData = heatValues[0];
    let columnTempIdx = 1;
    let rowTempIdx = 1;
    const temperatures = [];
    let columnData = {
      name: null,
      series: []
    };

    newestData.data.forEach(temp => {
      columnData.series.push({
        name: `rząd ${columnTempIdx}`,
        value: +temp
      });

      if (columnTempIdx === 4) {
        columnTempIdx = 0;
        temperatures.push(columnData);

        columnData = {
          name: null,
          series: []
        };

        rowTempIdx++;
      } else {
        columnData.name = `kolumna ${rowTempIdx}`;
      }

      columnTempIdx++;
    });

    this.maxTemp = Math.max(...temperatures.map(temp => temp.value));
    this.minTemp = Math.min(...temperatures.map(temp => temp.value));

    return temperatures;
  }
}

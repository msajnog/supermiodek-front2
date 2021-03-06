import { Component, OnInit } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';

import { CarouselItemInterface } from './carousel.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideState', [
      state('active', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('active => hidden', [
        style({
          opacity: 1,
        }),
        animate('0.7s ease-out')
      ]),
      transition('hidden => active', [
        style({
          opacity: 0,
        }),
        animate('0.7s ease-in')
      ]),
    ])
  ]
})
export class CarouselComponent implements OnInit {
  interval;
  items: CarouselItemInterface[] = [
    {
      url: 'assets/images/slide01.jpg',
      state: 'active'
    },
    {
      url: 'assets/images/slide02.jpg',
      state: 'hidden'
    },
    {
      url: 'assets/images/slide03.jpg',
      state: 'hidden'
    },
  ];

  constructor() { }

  ngOnInit() {
    this.startSliding();
  }

  slide (direction) {
    const activeIndex = this.items.findIndex(item => {
        return item.state === 'active';
    });

    let newIndex: number;

    if (direction === 'prev') {
      newIndex = activeIndex > 0 ? activeIndex - 1 : this.items.length - 1;
    } else if (direction === 'next') {
      newIndex = activeIndex < this.items.length - 1 ? activeIndex + 1 : 0;
    }

    this.items[activeIndex].state = 'hidden';
    this.items[newIndex].state = 'active';
    this.interval.unsubscribe();
    this.startSliding();
  }

  startSliding () {
    this.interval = Observable.interval(5000).subscribe(() => { this.slide('next'); });
  }
}

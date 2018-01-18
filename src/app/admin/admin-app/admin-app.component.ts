import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.interface';

@Component({
  selector: 'app-app',
  templateUrl: './admin-app.component.html',
  styleUrls: ['./admin-app.component.scss']
})
export class AdminAppComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {}
}

import { Component } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private toasterService: ToasterService) {}

  public toasterConfig: ToasterConfig =
    new ToasterConfig({
      positionClass: 'toast-bottom-right',
    });
}

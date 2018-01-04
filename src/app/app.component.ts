import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  routerSubscription: Subscription;
  title = 'app';

  constructor(private toasterService: ToasterService,
              private router: Router) {}

  public toasterConfig: ToasterConfig =
    new ToasterConfig({
      positionClass: 'toast-bottom-right',
    });

  ngOnInit() {
    this.routerSubscription = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        window.scroll(0, 0);
      });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}

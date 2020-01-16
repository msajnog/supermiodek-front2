import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public router: Router,
              private scrollService: ScrollToService) { }

  scrollToSection(element): void {
    this.scrollService.scrollTo(`#${element}Section`, 500, -70);
    this.router.navigate(['/'], { fragment: `${element}` });
  }
}

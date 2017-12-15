import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ToasterService, Toast } from 'angular2-toaster';

import * as fromApp from '../../store/app.interface';
import * as FooterActions from './store/footer.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm: FormGroup;
  contactFormSend: Observable<boolean> = this.store.select('footer', 'contactDataSend');

  constructor(private store: Store<fromApp.AppState>,
              private toasterService: ToasterService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.pattern('\\d+'), Validators.minLength(9)]),
      'subject': new FormControl(null, [Validators.required]),
      'content': new FormControl(null, [Validators.required]),
      'sendCopy': new FormControl(null),
    });

    this.contactForm.valueChanges.subscribe(() => {
      this.store.dispatch(new FooterActions.SetContactData(this.contactForm.value));
    });
  }

  onSubmit() {
    this.store.dispatch(new FooterActions.SendContactForm(this.contactForm.value));
    this.contactFormSend.subscribe((value) => {
      if (value) {
        this.contactForm.reset();
      }
    });
  }

  // popToast() {
  //   const toast: Toast = {
  //     type: 'success',
  //     title: '',
  //     body: 'response.message',
  //   };
  //   this.toasterService.pop(toast);
  // }
}

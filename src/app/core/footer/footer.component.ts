import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as fromApp from '../../store/app.reducers';
import * as FooterActions from './store/footer.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.pattern('\\d+'), Validators.minLength(9)]),
      'subject': new FormControl(null, [Validators.required]),
      'content': new FormControl(null, [Validators.required]),
      'sendCopy': new FormControl(null),
    });
  }

  onSubmit() {
    this.store.dispatch(new FooterActions.SendContactForm({contact: this.contactForm.value}));
    // this.contactForm.reset();
  }
}

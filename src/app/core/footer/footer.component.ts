import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'contactName': new FormControl(null, [Validators.required]),
      'contactEmail': new FormControl(null, [Validators.required, Validators.email]),
      'contactPhone': new FormControl(null, [Validators.pattern('\\d+'), Validators.minLength(9)]),
      'contactSubject': new FormControl(null, [Validators.required]),
      'contactContent': new FormControl(null, [Validators.required]),
      'sendCopy': new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.contactForm);
    this.contactForm.reset();
  }
}

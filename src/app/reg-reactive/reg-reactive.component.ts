import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {CheckUserNameSpace} from '../validators/check-space.validator'

@Component({
  selector: 'reg-reactive',
  templateUrl: './reg-reactive.component.html',
  styleUrls: ['./reg-reactive.component.css']
})

export class RegReactiveComponent {

  form = new FormGroup({
    userName: new FormControl('', [
      Validators.required, 
      Validators.maxLength(25) ,
      CheckUserNameSpace.checkSpace
    ],
    // CheckUserNameSpace.checkExisiting
    ),
    num: new FormControl('', CustomValidators.range([5, 9]))
  })

  get userName() {
    return this.form.get('userName');
  }

  get num() {
    return this.form.get('num');
  }
}

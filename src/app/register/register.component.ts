import { Component } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  log(email){
    //console.log(email);
  }
  submit(frm){
    console.log(frm.control.value.email);
  }
}

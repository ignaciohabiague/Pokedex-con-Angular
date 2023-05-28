import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm:FormGroup
  constructor (private fb:FormBuilder){
    this.myForm = this.fb.group({
      email:[""],
      password:[""],
    })
  }
}

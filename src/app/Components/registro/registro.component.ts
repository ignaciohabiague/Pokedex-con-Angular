import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  myForm:FormGroup
  constructor (private fb:FormBuilder){
    this.myForm = this.fb.group({
      nombre:["",[Validators.required]],
      email:["",[Validators.required]],
      edad:[""],
      password:["",[Validators.required]],
      password2:["",[Validators.required]]
    })
  }
}

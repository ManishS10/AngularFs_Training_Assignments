import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-model-forms',
  templateUrl: './model-forms.component.html',
  styleUrls: ['./model-forms.component.css']
})
export class ModelFormsComponent implements OnInit {

  registrationForm:FormGroup = new FormGroup
  ({

    ownername : new FormControl("", Validators.required),
    contactno : new FormControl("", Validators.required),
    city : new FormControl("", [Validators.minLength(3), Validators.maxLength(10)]),
    owneremail : new FormControl("", [Validators.email,Validators.required]),
    vechicleregno : new FormControl("", Validators.pattern("^[a-zA-Z0-9]{10}$")),
    color : new FormControl("",Validators.required),
    address : new FormControl("",Validators.required),
    year : new FormControl("",[Validators.min(2012),Validators.max(2020)])

  });

  constructor() { }

  ngOnInit(): void {
  }

  public submit_click():void
  {
      // ajax call to send data to server
      alert("Customer Details are registered.");
      let formObj = this.registrationForm.value;
      console.log(formObj);
  }
}

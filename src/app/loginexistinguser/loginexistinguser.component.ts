import { DisplaycomponentService } from './../displaycomponent.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginexistinguser',
  templateUrl: './loginexistinguser.component.html',
  styleUrls: ['./loginexistinguser.component.css']
})
export class LoginexistinguserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private displayc: DisplaycomponentService,
    private router: Router) { }

  loginform: FormGroup;
  ngOnInit() {
    this.loginform = this.formBuilder.group(
      {
        emailid: ['', Validators.email],
        password: ['', Validators.required]
      });
  }

  onSubmit() {

    let getkey = localStorage.getItem(this.loginform.controls.emailid.value);

    if (getkey === null || this.loginform.invalid) {
      alert("Enter Correct User ID & Password Again");
      return;
    }

    if (this.loginform.valid && getkey != null) {

      interface MyObj {
        emailid: string;
        password: string;
      }
      let storagevalue: MyObj = JSON.parse(getkey);

      console.log(storagevalue.emailid);
      console.log(storagevalue.password);

      //localStorage.setItem(this.loginform.controls.emailid.value, JSON.stringify(this.loginform.value))
      // console.log(JSON.stringify(this.loginform.value));

      if (storagevalue.password === this.loginform.controls.password.value) {
        window.alert("Login Sucessfull");
        this.displayc.changeMessage(true);
        this.router.navigate(['/', 'home'])
      }
      else {
        alert("Enter Correct User ID & Password Again");
        return;
      }
    }

  }

  showcomponent() {
    this.displayc.changeMessage(true);
    this.router.navigate(['/', 'home'])
  }


}

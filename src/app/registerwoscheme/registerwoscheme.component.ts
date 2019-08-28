
import { Component, OnInit } from '@angular/core';
import { DisplaycomponentService } from '../displaycomponent.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-registerwoscheme',
  templateUrl: './registerwoscheme.component.html',
  styleUrls: ['./registerwoscheme.component.css']
})
export class RegisterwoschemeComponent implements OnInit {


  constructor(private displayc: DisplaycomponentService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  registerForm: FormGroup;
  valid_email: boolean;

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        usertype: ['', Validators.required],
        dealername: ['', Validators.required],
        salutation: ['', Validators.required],
        name: ['', Validators.required],
        emailid: ['', Validators.email],
        password: ['', Validators.required],
        repassword: ['', Validators.required],
        dob: ['', Validators.required],
        mobileno: ['', Validators.required],
        landlineno: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', Validators.required],
        country: ['', Validators.required]

      });
  }

  checkemailexist($event) {
    this.registerForm.patchValue({ name: $event.target.value.toUpperCase() })
    let getkey = localStorage.getItem(this.emailid.value);
    if (getkey === null) {
      this.valid_email = true;
      this.emailid.setErrors(null);
    }
    else {
      this.emailid.setErrors({ mismatch: true });
    }
  }
  // All is this method
  onPasswordChange() {
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }

  get emailid(): AbstractControl {
    return this.registerForm.controls['emailid'];
  }

  // getting the form control elements
  get password(): AbstractControl {
    return this.registerForm.controls['password'];
  }

  get confirm_password(): AbstractControl {
    return this.registerForm.controls['repassword'];
  }

  onSubmit() {

    if (this.registerForm.invalid) {
      alert("Re-enter Form Again");
      return;

    }
    if (this.registerForm.valid) {

      localStorage.setItem(this.registerForm.controls.emailid.value, JSON.stringify(this.registerForm.value))
      // console.log(JSON.stringify(this.registerForm.value));

      window.alert("Account Created Sucessfully. Proceed To Login");
      this.displayc.changeMessage(true);
      this.router.navigate(['/', 'home'])
    }

  }

  showcomponent() {
    this.displayc.changeMessage(true);
    this.router.navigate(['/', 'home'])
  }

  usertypedd_data: any[] = [
    { type: "director" },
    { type: "dealer" },
    { type: "manager" },
    { type: "employee" },
    { type: "customer" },
    { type: "supplier" },
    { type: "courier" },
    { type: "others" }
  ]

  dealernamedd_data: any[] = [

    { name: "GOURI  WELFARE  FOUNDATION" },
    { name: "Wahid Friends Circle" }

  ]

  statedd_data: any[] = [
    { name: 'Andhra Pradesh (Hyderabad (Proposed Capital Amaravati))' },
    { name: 'Arunachal Pradesh (Itanagar)' },
    { name: 'Assam (Dispur)' },
    { name: 'Bihar (Patna)' },
    { name: 'Chhattisgarh (Raipur)' },
    { name: 'Goa (Panaji)' },
    { name: 'Gujarat (Gandhinagar)' },
    { name: 'Haryana (Chandigarh)' },
    { name: 'Himachal Pradesh (Shimla)' },
    { name: 'Jammu and Kashmir (Srinagar (summer), Jammu (winter))' },
    { name: 'Jharkhand (Ranchi)' },
    { name: 'Karnataka (Bengaluru)' },
    { name: 'Kerala (Thiruvananthapuram)' },
    { name: 'Madhya Pradesh (Bhopal)' },
    { name: 'Maharashtra (Mumbai)' },
    { name: 'Manipur (Imphal)' },
    { name: 'Meghalaya (Shillong)' },
    { name: 'Mizoram (Aizawl)' },
    { name: 'Nagaland (Kohima)' },
    { name: 'Odisha (Bhubaneswar)' },
    { name: 'Punjab (Chandigarh)' },
    { name: 'Rajasthan (Jaipur)' },
    { name: 'Sikkim (Gangtok)' },
    { name: 'Tamil Nadu (Chennai)' },
    { name: 'Telangana (Hyderabad)' },
    { name: 'Tripura (Agartala)' },
    { name: 'Uttar Pradesh (Lucknow)' },
    { name: 'Uttarakhand (Dehradun)' },
    { name: 'West Bengal (Kolkata)' }

  ]

  countrydd_data: any[] = [
    { name: "INDIA" }
  ]
}

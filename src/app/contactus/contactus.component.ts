import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactusimgs = "https://www.gouriimpex.com/upload/images/web%20company%20profile%2810%29.jpg"

  contactusdetails: any[] = [
    { details: "Mr. Gururaj Vasantrao Yajurvedi ( Proprietor )" },
    { details: "“Vasantpuspa”, Plot No. 15, Ganesh Housing Society," },
    { details: "Pandharpur Road, Dist Sangli, Miraj - 416410, Maharashtra, India." },
    { details: "1)    gouriimpexmiraj@gmail.com     2)    gouriimpexhelp@gmail.com " },
    { details: "Mobile :+91 9764996216 , +91 9503445526 , +91 9422493971 Phone :91-233-2223653" }

  ]
}

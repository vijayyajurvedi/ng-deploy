import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactusdetails: any[] = [
    { details: "Mr. Gururaj Vasantrao Yajurvedi ( Proprietor )" },
    { details: "“Vasantpuspa”, Plot No. 15, Ganesh Housing Society," },
    { details: "Pandharpur Road, Dist Sangli, Miraj - 416410, Maharashtra, India." },
    { details: "1)    gouriimpexmiraj@gmail.com     2)    gouriimpexhelp@gmail.com " },
    { details: "Mobile :+91 9764996216 , +91 9503445526 , +91 9422493971 Phone :91-233-2223653" }

  ]

  quicklinks: any[] = [
    { details: "Send Enquiry" },
    { details: "Send SMS" },
    { details: "Call Me Free" },
    { details: "We are Social" }
  ]

}

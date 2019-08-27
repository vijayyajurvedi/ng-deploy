import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerwoscheme',
  templateUrl: './registerwoscheme.component.html',
  styleUrls: ['./registerwoscheme.component.css']
})
export class RegisterwoschemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
}

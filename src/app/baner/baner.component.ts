import { Component, OnInit } from '@angular/core';
import { DisplaycomponentService } from '../displaycomponent.service';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit {

  constructor(private displayc: DisplaycomponentService) { }

  ngOnInit() {
  }

  hidecomponent()
  {
    this.displayc.changeMessage(false);
  }

}

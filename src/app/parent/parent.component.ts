import { Component, OnInit } from '@angular/core';
import { DisplaycomponentService } from '../displaycomponent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  showcomponent: boolean;

  constructor(private displayc: DisplaycomponentService) { }

  ngOnInit() {

    this.displayc.currentmessage.subscribe(message => this.showcomponent = message)
  }

  clearlocalstorage() {
    localStorage.clear();
    console.log("Storage Cleared.")
  }
  readlocalstorage() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      console.log("Key: " + key, '\n' + "Value: " + value);
    }


  }

}

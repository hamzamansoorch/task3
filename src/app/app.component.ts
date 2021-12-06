import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showCheck = false;
  ngOnInit() {

  }
  currentVal = "";
  //check content


  getVal(val: any) {
    console.warn(val);
    this.currentVal = val;

  }
  onclick() {
    this.showCheck = !this.showCheck;


  }
}

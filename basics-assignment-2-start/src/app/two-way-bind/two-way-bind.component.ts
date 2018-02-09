import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-two-way-bind',
  templateUrl: './two-way-bind.component.html',
  styleUrls: ['./two-way-bind.component.css']
})
export class TwoWayBindComponent implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit() {
  }

  isBtnDisabled() {
    return this.userName == null || this.userName === '';
  }

  resetUserName() {
    this.userName = '';
  }

}

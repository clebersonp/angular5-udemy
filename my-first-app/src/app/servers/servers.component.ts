import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // usado como uma tag no html
  // selector: '[app-servers]', // usado como um atributo html
  // selector: '.app-servers', // usado como uma classe de uma tag html
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

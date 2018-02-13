import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  /*
   o decorator @Input() permite expor essa propriedade para outro modulos,
  pois o modula app.component esta tentando passar um valor para esse atributo
  */

  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}

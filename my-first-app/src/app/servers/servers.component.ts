import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers', // usado como uma tag no html
  // selector: '[app-servers]', // usado como um atributo html
  // selector: '.app-servers', // usado como uma classe de uma tag html
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'Server is not working in this moment';
  allowNewServer = false;
  serverName = 'preText';
  serverCreated = false;
  servers = ['Server Teste1', 'Server Test2'];

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);

   }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server is running right now! ' + this.serverName;

    // adicionar os nomes de servidores digitados na tela no array
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

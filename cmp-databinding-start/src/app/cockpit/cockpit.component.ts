import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // adicionando alias aos eventEmitter
  // tslint:disable-next-line:no-output-rename
  @Output('eventoDeServerNameCriado') serverContentCreated = new EventEmitter<{name: string, content: string}>();
  // tslint:disable-next-line:no-output-rename
  @Output('eventoDeServerBlueprintCriado') serverBlueprintCreated = new EventEmitter<{name: string, content: string}>();
  // comentando esse atributo pois vamos usar Local Reference, passando o html para aqui
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  // emitindo um evento de saida, output desse componente estando dentro de outro component
  // passando o Local reference vindo do template HTML via parametro para recuperar o valor do component html Input
  onAddServer(serverName: HTMLInputElement) {
    this.serverContentCreated.emit({name: serverName.value, content: this.newServerContent});
  }

  // emitindo um evento de saida, output desse componente estando dentro de outro component
  // passando o Local reference vindo do template HTML via parametro para recuperar o valor do component html Input
  onAddBlueprint(serverName: HTMLInputElement) {
    this.serverBlueprintCreated.emit({name: serverName.value, content: this.newServerContent});
  }

}

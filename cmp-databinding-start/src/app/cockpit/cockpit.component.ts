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
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  // emitindo um evento de saida, output desse componente estando dentro de outro component
  onAddServer() {
    this.serverContentCreated.emit({name: this.newServerName, content: this.newServerContent});
  }

  // emitindo um evento de saida, output desse componente estando dentro de outro component
  onAddBlueprint() {
    this.serverBlueprintCreated.emit({name: this.newServerName, content: this.newServerContent});
  }

}

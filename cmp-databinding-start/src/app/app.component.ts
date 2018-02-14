import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  num = 0;

  onServerCreated(event: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: event.name,
      content: event.content
    });
  }

  onBlueprintCreated(event: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.name,
      content: event.content
    });
  }

  onBtnClickChanges() {
    this.num++;
    this.serverElements[0].name = 'changed ' + this.num + ' times';
  }

  // removendo o elemento do array para ver o cicle de vida OnDestroy
  onBtnClickDestroyFirstElement() {
    this.serverElements.splice(0, 1);
  }
}

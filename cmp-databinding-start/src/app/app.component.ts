import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

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
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  someText = 'Secret Password = tuna';
  texts = ['Another text example', 'Changing a little bit', 'Here\'s another example', 'Some texts here'];
  logs = [];
  position = 0;
  timeStamp = '';

  onButtomClicked() {
    const size = this.texts.length;
    this.position = Math.floor(Math.random() * size);
    this.someText = this.texts[this.position];

    this.logs.push(new Date().toLocaleString());
  }

  getLogs() {
    const newLogs = [];
    if (this.logs.length > 4) {
      for (let i = 4; i < this.logs.length; i++) {
        newLogs.push(this.logs[i]);
      }
    }
    return newLogs;
  }

}

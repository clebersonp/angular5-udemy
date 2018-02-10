import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showText = false;
  someText = 'Secret Password = tuna';
  texts = ['Another text example', 'Changing a little bit', 'Here\'s another example', 'Some texts here'];
  logs = [];
  timeStamp = '';

  onButtomClicked() {

    this.showText = !this.showText;

    const size = this.texts.length;
    const position = Math.floor(Math.random() * size);
    this.someText = this.texts[position];

    this.logs.push(new Date().toLocaleString());
  }

  getLogs() {
    return this.logs;
  }

}

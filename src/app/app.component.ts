//Where all views are loaded
import { Component } from '@angular/core';

@Component({
  //app-root tag @ index.html
  selector: 'hinv-root',
  template: `<h1>Angular is awesome!</h1>`,
  //templateUrl: './app.component.html'
  styleUrls: ['./app.component.scss'],
  //styles: [`h1 { color: red; }`],
})
export class AppComponent {
  title = 'hotelInventoryApp';
}

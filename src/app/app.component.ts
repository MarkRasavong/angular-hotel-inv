//Where all views are loaded
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  //app-root tag @ index.html
  selector: 'hinv-root',
  //template: `<h1>Angular is awesome!</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //styles: [`h1 { color: red; }`],
})
export class AppComponent implements AfterViewInit {
  title = 'hotelInventoryApp';
  /* role = 'Admin'; */
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    //componentRef.instance.numberOfRooms = 50;
  }
}

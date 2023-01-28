import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  //interpolation binding syntax
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}

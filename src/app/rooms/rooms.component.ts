import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  // DI is a design pattern which can be institated throughout the app
  // best practice to make services private
  // the component should not get data or any api calls, etx => Always use services
  // If there is a service provider, no DI will be utilized
  constructor(private roomsService: RoomsService) {}

  //interpolation binding syntax
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  //creates a new instance of this component,
  //static: true => this component is safe to use OnInIt
  // if there is asynchronous rendering of components especially at OnInIt
  //view child will always have access to the first istance on component.html
  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
    /*this.headerChildrenComponent  use cases displaying records of multiple children=> */
  }

  ngAfterViewChecked(): void {}

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2021'),
    };
  }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }
}

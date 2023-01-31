import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit, OnChanges {
  /* 'rooms' will become an attribute of hinv-rooms-list */
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  /* What kind of data we need to send to the parent */
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit() {}

  selectRoom(room: RoomList) {
    //gives data back to parent
    this.selectedRoom.emit(room);
  }
}

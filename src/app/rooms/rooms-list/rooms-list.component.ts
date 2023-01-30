import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
  /* 'rooms' will become an attribute of hinv-rooms-list */
  @Input() rooms: RoomList[] = [];

  constructor() {}

  ngOnInit() {}
}

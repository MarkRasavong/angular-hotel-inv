import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  //first RoomsService is being initialized at global scope (Rooms - component)
  //And second is at this component
  providers: [RoomsService],
})
export class EmployeeComponent implements OnInit {
  empName: string = 'Jon';

  //@Self => it should be available at a certain level
  // if it's available through providers only => else use the nullInjector
  constructor(@Self() private roomsService: RoomsService) {}

  ngOnInit() {}
}

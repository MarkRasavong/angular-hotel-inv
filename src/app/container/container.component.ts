import {
  AfterContentInit,
  Component,
  ContentChild,
  Host,
  OnInit,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  //All the components nested in COntainer can now use roomsService
  constructor(@Host() private roomsService: RoomsService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.employee.empName = 'Ric Thicc';
  }

  /* prefer to use input/output but view is ok as well - ngAfterContentInit is rare */
}

import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.employee.empName = 'Ric Thicc';
  }

  /* prefer to use input/output but view is ok as well - ngAfterContentInit is rare */
}

//Where all views are loaded
import {
  AfterViewInit,
  Inject,
  Component,
  ElementRef,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';

@Component({
  //app-root tag @ index.html
  selector: 'hinv-root',
  //template: `<h1>Angular is awesome!</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //styles: [`h1 { color: red; }`],
})
export class AppComponent implements OnInit {
  title = 'hotelInventoryApp';
  /* role = 'Admin'; */
  /*   @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    //componentRef.instance.numberOfRooms = 50;
  } */

  /* static: true => this div is not async */
  @ViewChild('name', { static: true }) name!: ElementRef;

  //@Optional use this service only for development
  //It will not throw errors if it doesn't exist in the app context
  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage
  ) {}

  ngOnInit() {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Seven Seasons';
    this.localStorage.setItem('name', 'Barceló Hotel');
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
// ANGULAR EVERYTHING is a class. At minium one module to run the application

/* 
directives, pipes goes to declarations array

*/

//NgModule decorator: mods the class => gives metadata to class
@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
  ],
  //which component will be rendered first
  bootstrap: [AppComponent],
})
export class AppModule {}

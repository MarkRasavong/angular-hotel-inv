import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
// ANGULAR EVERYTHING is a class. At minium one module to run the application

/* 
directives, pipes goes to declarations array

*/

//NgModule decorator: mods the class => gives metadata to class
@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  //which component will be rendered first
  bootstrap: [AppComponent],
})
export class AppModule {}

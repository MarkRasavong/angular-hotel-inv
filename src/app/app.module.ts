import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ANGULAR EVERYTHING is a class. At minium one module to run the application

/* 
directives, pipes goes to declarations array

*/

//NgModule decorator: mods the class => gives metadata to class
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  //which component will be rendered first
  bootstrap: [AppComponent],
})
export class AppModule {}

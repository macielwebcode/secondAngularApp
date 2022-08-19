import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoModule } from './photo/photo-module';
import { PhotoListComponent } from './photo/photo-component/photo-list/photo-list.component';



@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

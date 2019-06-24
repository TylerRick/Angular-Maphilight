import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { MaphilightModule } from 'ng-maphilight';
import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MaphilightModule,
  ],
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

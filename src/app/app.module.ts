import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {HttpService} from './http.service';




import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HttpbinComponent } from './httpbin/httpbin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HttpbinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { AboutComponent } from './header/about/about.component';
import { ContactComponent } from './header/contact/contact.component';
import { CareerComponent } from './header/career/career.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CareerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

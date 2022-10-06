import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { AboutComponent } from './header/about/about.component';
import { ContactComponent } from './header/contact/contact.component';
import { CareerComponent } from './header/career/career.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path: 'header',component:HeaderComponent},
  {path: 'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path: 'career',component:CareerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

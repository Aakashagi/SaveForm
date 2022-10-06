import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  first=""
  last=""
  date=""
  place=""
  mail=""
  clg=""

  title="RegisterForm"
  firstget=""
  lastget=""
  ageget=""
  placeget=""
  mailget=""
  clgget=""
 

  constructor() { }

  ngOnInit(): void {
  }

  ChangeName(){
    this.first = this.firstget
    this.last = this.lastget
    this.date = this.ageget
    this.place += this.placeget
    this.mail = this.mailget
    this.clg = this.clgget
  }
  ClearName(){
   
      this.firstget=""
      this.lastget=""
      this.ageget=""
      this.placeget=""
      this.mailget=""
      this.clgget=""


      /*this.first=""
      this.last=""
      this.date=""
      this.place=""
      this.mail=""
      this.clg="" */



    }

  }



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication-comp',
  templateUrl: './communication-comp.component.html',
  styleUrls: ['./communication-comp.component.css']
})
export class CommunicationCompComponent implements OnInit {

  parentMsg:string = "Wish your child"


  childMsg:string = ''

  constructor() { }

  ngOnInit(): void {
  }


  sendMsg(){
    this.parentMsg = 'Hi, Happy New Year'

  }

  parentFun(event:any){
    this.childMsg = event
  }
}

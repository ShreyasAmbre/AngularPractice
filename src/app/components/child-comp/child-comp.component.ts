import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input() childMsgVariable:string = "No Message"

  @Output() dataEventEmitVariable = new EventEmitter();
  returnMsg:string = "Thank You!!!, Wish you the same"



  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent(){
    this.dataEventEmitVariable.emit(this.returnMsg)
  }




  popAlert(){
    alert(this.returnMsg)
  }

}

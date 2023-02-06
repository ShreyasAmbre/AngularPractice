import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.css']
})
export class HookChildComponent implements OnInit {

  // @Input() msg:string | undefined;
  @Input() msg:string = "No Message"

  @Output() childEmit = new EventEmitter();



  msgtoParent:string = "Msg from child to parent"
  inpVal:string = "Enter your value"


  constructor() { }

  ngOnInit(): void {
    console.log("Msg from parent :- ", this.msg)



    this.childEmit.emit(this.msgtoParent)
  }


  changeMsg(){
    this.msgtoParent = "Msg has been changed"
  }


}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cone',
  templateUrl: './cone.component.html',
  styleUrls: ['./cone.component.css']
})
export class ConeComponent implements OnInit {
  @Input() msgfromParent:any;
  @Output() childPropert = new EventEmitter();
  

  msgfromChild:string = "Msg from Child to Parent"

  constructor() { }

  ngOnInit(): void {
    console.log("MSG FROM PARENT ===>", this.msgfromParent)

    this.emitEventtoSendDataToParent()
  }


  emitEventtoSendDataToParent(){
    this.childPropert.emit(this.msgfromChild)
  }


  

}

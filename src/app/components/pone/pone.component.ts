import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pone',
  templateUrl: './pone.component.html',
  styleUrls: ['./pone.component.css']
})
export class PoneComponent implements OnInit {

  sendMsgtoChild:string = "Msg from Parent to Child"

  constructor() { }

  ngOnInit(): void {
  }


  parentFnForChildEventCatching(event:any){
    console.log("MSG FROM CHILD ===>",event)
  }

}

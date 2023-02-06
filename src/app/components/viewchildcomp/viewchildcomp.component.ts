import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';

@Component({
  selector: 'app-viewchildcomp',
  templateUrl: './viewchildcomp.component.html',
  styleUrls: ['./viewchildcomp.component.css']
})
export class ViewchildcompComponent implements OnInit {

  @ViewChild('templateRefVariableInputVal') eleRefVar: ElementRef | undefined 

  @ViewChild('templeteRefVarChildComp') eleChildComp: ChildCompComponent | undefined

  constructor() { }

  ngOnInit(): void {
  }



  printValue(){
    console.log("Input Value ===>", this.eleRefVar)
  }


  printChildProperty(){
    console.log("Printing Child Property ===>", this.eleChildComp?.returnMsg)
  }


  triggerChildMethod(){
    this.eleChildComp?.popAlert()
  }

}

import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hook-parent',
  templateUrl: './hook-parent.component.html',
  styleUrls: ['./hook-parent.component.css']
})
export class HookParentComponent implements OnInit, OnChanges, DoCheck,  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  msgFromParent:string = "Msg from parent to child"

  constructor() { 
    console.log("Angular Life Cycle Hooks => ", "constructor")
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Angular Life Cycle Hooks => ", "ngOnChanges", changes)
  }

  ngOnInit(): void {
    console.log("Angular Life Cycle Hooks => ", "ngOnInit")
  }

  ngDoCheck(): void {
    console.log("Angular Life Cycle Hooks => ", "ngDoCheck")
  }


  ngAfterContentInit(): void {
    console.log("Angular Life Cycle Hooks => ", "ngAfterContentInit")
    
  }

  ngAfterContentChecked(): void {
    console.log("Angular Life Cycle Hooks => ", "ngAfterContentChecked")
    
  }

  ngAfterViewInit(): void {
    console.log("Angular Life Cycle Hooks => ", "ngAfterViewInit")
    
  }

  ngAfterViewChecked(): void {
    console.log("Angular Life Cycle Hooks => ", "ngAfterViewChecked")
    
  }

  ngOnDestroy(): void {
    console.log("Angular Life Cycle Hooks => ", "ngOnDestroy")
    
  }




  


  





  





  parentFun(event:any){
    console.log("Msg from child ===>", event)
  }

}

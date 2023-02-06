import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hostlist',
  templateUrl: './hostlist.component.html',
  styleUrls: ['./hostlist.component.css']
})
export class HostlistComponent implements OnInit {
  @ViewChild('myCard') myCard: ElementRef | undefined


  msg = "As this HostListner is attached directly to Component as Component is also a Directive in Itself only this directive has it own View File"


  @HostListener('click')   
  myClick(){
    alert(this.msg)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

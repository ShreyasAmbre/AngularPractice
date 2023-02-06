import { Directive, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {
  @Input() templateRefVar: any;

  constructor(private renderer: Renderer2) { }

  @HostListener('click')
  myClick(){
    // alert("Product Selected")
    // console.log("Product Selected", this.templateRedElement)
    console.log("Product Selected", this.templateRefVar)

    this.renderer.setStyle(this.templateRefVar, 'background', 'red')
  }

}

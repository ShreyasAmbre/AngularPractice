import { Component } from '@angular/core';

@Component({
    selector: 'app-structure-directive',
    templateUrl: '../structureDirective/structureDirective.component.html',
    styleUrls: ['../structureDirective/structureDirective.component.css']
})

export class StructureDirective{
    isVisible:boolean = true
    day:number = 0;
    selectedProduct:any
    data = ["BMW", "Audi", "Mercedes"]



    getProduct(event:any){
        this.selectedProduct = event.target.value
    }
    
}
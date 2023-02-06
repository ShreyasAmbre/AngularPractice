import { Component } from '@angular/core';

@Component({
    selector: 'app-template-ref-var',
    templateUrl: '../templateRefVar/templateRefVar.component.html',
    styleUrls: ['../templateRefVar/templateRefVar.component.css']
})

export class TemplateRefVar {


    getName(elementRefVar:any){
        console.log("GET NAME ===>", elementRefVar)
        console.log("GET NAME ===>", elementRefVar.name)
        console.log("GET NAME ===>", elementRefVar.value)
    }

}
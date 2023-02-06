import { Component } from '@angular/core';

@Component({
    selector: 'app-class-style-binding',
    templateUrl: '../classStyleBinding/classStyleBinding.component.html',
    styleUrls: ['../classStyleBinding/classStyleBinding.component.css']
})

export class ClassStyleBinding {
    isExpanded:boolean = true
    myComponentMargin:string = "15px"


    isBorder:boolean = true

    isExpandBox3:boolean = true


    isTextExpand:boolean = true
}
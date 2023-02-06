import { Component } from "@angular/core";

@Component({
    selector: 'app-pipescom',
    templateUrl: '../pipescom/pipescom.component.html',
    styleUrls: ['../pipescom/pipescom.component.css']
})

export class Pipescom {
    comtitle:string = "here we will learn pipes all about pipes (inbuilt pipes, custom pipes, pure & impure pipes)"
    title:string = "This is my title"
    myDate:any = new Date()
    myvalue:unknown;

    rupees: number = 528749685
    rupeesString: string = "52685"

} 
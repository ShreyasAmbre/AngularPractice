import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: '../about/about.component.html',
    styleUrls: ['../about/about.component.css']
})

export class AboutComponent {
    
    isVisibleProducts:boolean = true

    products = [
        {name: 'Laptop', btnTxt: 'Know More Laptops'},
        {name: 'Mobile', btnTxt: 'Know More Mobiles'},
        {name: 'Camera', btnTxt: 'Know More Cameras'},
        {name: 'TV', btnTxt: "Know More TV's"},
    ]


}
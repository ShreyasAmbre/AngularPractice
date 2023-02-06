import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: '../home/home.component.html',
    styleUrls: ['../home/home.component.css']
})

export class HomeComponent {

    constructor(private router: Router){}
 
    

    navigateTo(){
        this.router.navigate(['about'])
    }
}
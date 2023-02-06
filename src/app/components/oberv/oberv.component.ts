import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-oberv',
  templateUrl: './oberv.component.html',
  styleUrls: ['./oberv.component.css']
})
export class ObervComponent implements OnInit {

  constructor(private service: MainService) { }

  ngOnInit(): void {

    this.getValue()
  }



  getValue(){
    this.service.getApiData().subscribe(res => {
      console.log("API DATA ===>", res)
    })
  }

  setValue(){
    this.service.setApiData().subscribe(res => {
      console.log("SET API DATA ===>", res)
      console.log("Printed SYN ")

    }, error => {
      console.log("ERROR PRINTED ===>", error)
    }, () => {
      console.log("FINALLY COMPLETED")

    }
    )
    console.log("EXECUTED BEFORE THE RESPONSE COMES THIS IS ASYN EXECUTION to add this in SYN add inside subscribe method")
  }

}

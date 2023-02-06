import { HttpClient, HttpHeaders,  } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-templateForm',
    templateUrl: '../templateForm/templateForm.component.html',
    styleUrls: ['../templateForm/templateForm.component.css']   
})

export class TemplateForm  implements OnInit{


    constructor(private http_c: HttpClient){}


    ngOnInit(): void {
        this.ashishKhajur()
    }



    submitForm(formValues:unknown){
        console.log("FORM VALUES ==>", formValues)
    }





    ashishKhajur(){
        let temp:any = {}
            temp["client_id"] = '11011507558550';
            temp["Source"] = 'W';
            temp["broker_code"] = 'TRD007'
            temp["utype"] = "C";
            temp["mapper_code"] = "406";
            temp["data"] = "";
            temp["sessiontoken"] = "";
            temp["d_key"] = "";
            temp["init_vector"] = "==";


            let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        
        
    
        this.http_c.post('http://115.85.53.92/MPnResrchServices/api/TC/SAModelPortF', JSON.stringify(temp), { headers: headers }).subscribe(
          (data:any) => {
           console.log("datatatatata",data)     
          });
    }
}
import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-subject-form-two',
  templateUrl: './subject-form-two.component.html',
  styles: [
  ]
})
export class SubjectFormTwoComponent implements OnInit {
  title:any;

  constructor(private _designUtility: DesignService) { 
    this._designUtility.globalTitle.subscribe(gtitle => {
      this.title = gtitle
    })
  }

  ngOnInit(): void {
  }

  updateTitle(TemplateRefVar:any){
    // this.title = TemplateRefVar.value

    this._designUtility.globalTitle.next(TemplateRefVar.value)
  }

}

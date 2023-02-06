import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {




  // globalTitle = new Subject
  globalTitle = new BehaviorSubject('I_M_Behavior_Subject')


  constructor() { }
  
}

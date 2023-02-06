import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  startingVlaue:number = 0

  constructor(private http: HttpClient) { }

  getApiData(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }



  setApiData(): Observable<any>{
    let reqObj = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    } 
    return this.http.post('https://jsonplaceholder.typicode.com/posts', reqObj)
    .pipe(
      map((res:any) => {
        return res;
      })
    )
  }

}

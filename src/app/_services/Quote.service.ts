import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http, HttpModule, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
 
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import {Quote} from '../_models/quote';

@Injectable()
export class QuoteService {
 private baseServiceURL:string = 'http://ec2-52-27-149-161.us-west-2.compute.amazonaws.com/api/v1';
 
constructor(public authHttp: AuthHttp, public http:Http) { }
fetchAll(page:number):Observable<any>{
     let headers = new Headers({        
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization' :'Bearer '+ sessionStorage.getItem('token')
    });
     let options = new RequestOptions({
            headers: headers,
            method: RequestMethod.Get          
    });
    let apiUrl = this.baseServiceURL + '/quotes/search?q=&page='+page+'&pageSize=25';
  return   this.http.get(apiUrl, options)
    .map( (response: Response) => response.json() ).catch((error:any)=>{
         return Observable.throw(new Error(error.status));
    });
  }

 getById(id: number):Observable<any> {
           let headers = new Headers({        
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization' :'Bearer '+ sessionStorage.getItem('token')
    });
     let options = new RequestOptions({
            headers: headers,
            method: RequestMethod.Get          
    });
      let apiUrl = this.baseServiceURL + '/quotes/'+id;
  return   this.http.get(apiUrl, options)
    .map( (response: Response) => response.json() ).catch((error:any)=>{
         return Observable.throw(new Error(error.status));
    });
    }
}
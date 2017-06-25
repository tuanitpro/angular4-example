import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http, HttpModule, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { GlobalService } from '../_helpers/Global.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import {Quote} from '../_models/quote';

@Injectable()
export class QuoteService {

constructor(public authHttp: AuthHttp, public http:Http,
private global: GlobalService) { }
fetchAll(page:number):Observable<any>{
    let headers = new Headers({        
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization' :'Bearer '+ sessionStorage.getItem('token')
  });
    let options = new RequestOptions({
          headers: headers,
          method: RequestMethod.Get          
  });
  let apiURL = this.global.BASE_API_URL + '/quotes/search?q=&page='+page+'&pageSize=25';
return   this.http.get(apiURL, options)
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
    let apiURL = this.global.BASE_API_URL + '/quotes/'+id;
return   this.http.get(apiURL, options)
  .map( (response: Response) => response.json() ).catch((error:any)=>{
        return Observable.throw(new Error(error.status));
  });
  }
}
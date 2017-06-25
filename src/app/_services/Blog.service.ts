import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http, HttpModule, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { GlobalService } from '../_helpers/Global.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class BlogService {

constructor(public authHttp: AuthHttp, public http:Http,
private global: GlobalService) { }
fetchAll(page:number):Observable<any>{

  let apiURL = this.global.BASE_API_URL + '/blogs/search?q=&page='+page+'&pageSize=25';
return   this.http.get(apiURL)
  .map( (response: Response) => response.json() ).catch((error:any)=>{
        return Observable.throw(new Error(error.status));
  });
}

getById(id: number):Observable<any> {
    
    let apiURL = this.global.BASE_API_URL + '/blogs/'+id;
return   this.http.get(apiURL)
  .map( (response: Response) => response.json() ).catch((error:any)=>{
        return Observable.throw(new Error(error.status));
  });
  }
}
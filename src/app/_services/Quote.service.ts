import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http, HttpModule, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

import {Quote} from '../_models/quote';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class QuoteService {

constructor(public authHttp: AuthHttp, public http:Http) { }
fetchAll(){
     let headers = new Headers({        
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization' :'Bearer '+ sessionStorage.getItem('token')
    });
     let options = new RequestOptions({
            headers: headers            
    });
     this.http.get('http://localhost/api/v1/quotes/search?q=', options)
    .subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error),
      () => console.log('Request Complete')
    );
  }
}
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http, HttpModule, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { GlobalService } from '../_helpers/Global.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PagesService {

constructor(public authHttp: AuthHttp, public http:Http,
private global: GlobalService) { }

    getById(id:string):Observable<any>{
        let apiURL:string = this.global.BASE_API_URL+"/pages/"+id;
            return this.http.get(apiURL).map((response:Response)=>{
               return response.json()
            }
            ).catch((error:any)=>{
            return Observable.throw(new Error(error.status));
        });
    }
}
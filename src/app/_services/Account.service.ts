import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { GlobalService } from '../_helpers/Global.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class AccountService {

  
constructor(private http: Http, private global: GlobalService) {    }
register(userModel:any): Observable<any>{        
    let headers = new Headers({        
        'Content-Type':'application/json'         
    });
    let options = new RequestOptions({
            headers: headers            
    });
      
    let apiURL = this.global.BASE_API_URL + "/account/register";
    return  this.http.post(apiURL, JSON.stringify(userModel) ,options)
            .map((response: Response | any) =>{
                 if (response.status === 201) {
                        return false;
                    }
                    else if (response.status === 200) {
                        var data = response.json();                        
                        return true;
                    }              
        }).catch((error: any) => {
            
                if (error.status === 500) {
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === 400) {                    
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === 409) {
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === 406) {
                    return Observable.throw(new Error(error.status));
                }
            });
    }    
forgotPassword(forgotPasswordModel:any): Observable<any>{        
    let headers = new Headers({        
        'Content-Type':'application/json'         
    });
    let options = new RequestOptions({
            headers: headers            
    });
      
    let apiURL = this.global.BASE_API_URL + "/account/forgotpassword";
    return  this.http.post(apiURL, JSON.stringify(forgotPasswordModel) ,options)
            .map((response: Response | any) =>{
                 if (response.status === 201) {
                        return false;
                    }
                    else if (response.status === 200) {
                        var data = response.json();                        
                        return true;
                    }              
        }).catch((error: any) => {
            
                if (error.status === 500) {
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === 400) {                    
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === 409) {
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === 406) {
                    return Observable.throw(new Error(error.status));
                }
            });
    }
    
}
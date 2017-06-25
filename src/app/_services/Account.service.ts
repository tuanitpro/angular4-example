import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class AccountService {

private baseServiceURL:string = 'http://ec2-52-27-149-161.us-west-2.compute.amazonaws.com/api/v1/account/register';
 
constructor(private http: Http) {    }
register(username:string,password:string,confirmpassword:string): Observable<any>{
        

    let headers = new Headers({        
        'Content-Type':'application/x-www-form-urlencoded'         
    });
    let options = new RequestOptions({
            headers: headers            
    });
    
 
   
    var userModel={
        Username: username,
        Password: password,
        ConfirmPassword: confirmpassword
    };
    return  this.http.post(this.baseServiceURL, userModel ,options)
            .map((response: Response | any) =>{
                 if (response.status === 201) {
                        return false;
                    }
                    else if (response.status === 200) {
                        var data = response.json();
                       console.log(data);
                         return false;
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
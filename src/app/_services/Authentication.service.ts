import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthenticationService {
 private baseServiceURL:string = 'http://ec2-52-27-149-161.us-west-2.compute.amazonaws.com/oauth2/token';
 
 constructor(private http: Http) {    }
 
 login(username:string, password:string): Observable<any>{
       
    let postData = "grant_type=password&username=" + username + "&password=" + password;  


    let headers = new Headers({        
        'Content-Type':'application/x-www-form-urlencoded'         
    });
    let options = new RequestOptions({
            headers: headers            
    });
    return  this.http.post(this.baseServiceURL,postData,options)
            .map((response: Response | any) =>{
                 if (response.status === 201) {
                        return false;
                    }
                    else if (response.status === 200) {
                        var data = response.json();
                        if(data.access_token !=undefined && data.access_token !=''){
                    
                    var currentUser={
                        username: data.userName,
                        access_token: data.access_token
                    };
                       sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                       sessionStorage.setItem('token', data.access_token);
                        return true;
                    }
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
    logout():void{
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('token');
    }
}
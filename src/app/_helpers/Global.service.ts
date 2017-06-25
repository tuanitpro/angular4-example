import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
// // private baseServiceURL:string = 'http://ec2-52-27-149-161.us-west-2.compute.amazonaws.com/oauth2/token';
// private baseServiceURL:string = 'http://localhost/oauth2/token';
 
public   BASE_API_URL:string = "http://localhost/api/v1";
public   BASE_API_URL_TOKEN:string = "http://localhost/oauth2/token";
constructor() { }

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import $ from 'jquery/dist/jquery.min';

import {Login} from '../_models/user';
import {AuthenticationService} from '../_services/authentication.service';
import {AccountService} from '../_services/Account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  model: any = {};
  registerModel:any = {}
  loading = false;
  returnUrl: string;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private accountService: AccountService) { 
     
   }

  ngOnInit() {
     this.authenticationService.logout();
    $('.message a').click(function () {
                $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
  }
  loginFunction(){
     this.loading = true;
    var username = this.model.username;
    var password  =this.model.password;
     this.authenticationService.login(username, password).subscribe(response=>{
       if(response !=undefined && response !=null){
         if(response ===true){
            this.router.navigate(['/']);
         }
         else{
            
            this.loading = false;
         }
       }
     }, error=>{
       console.log(error);
        this.loading = false;
     });  
  }
  registerFunction(){
      this.loading = true;
    var username = this.registerModel.username;
    var password  =this.registerModel.password;
    var confirmpassword  =this.registerModel.confirmpassword;
    
     
       this.accountService.register(username, password, confirmpassword).subscribe(response=>{
       if(response !=undefined && response !=null){
         if(response ===true){

           // this.router.navigate(['/']);
         }
         else{
           console.log('Cannot login');
            this.loading = false;
         }
       }
     }, error=>{
       console.log(error);
        this.loading = false;
     });
  }
}

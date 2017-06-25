import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import $ from 'jquery/dist/jquery.min';
import toastr from 'toastr/build/toastr.min';
import {Login} from '../_models/user';
import {AuthenticationService} from '../_helpers/authentication.service';
import {AccountService} from '../_services/Account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  model: any = {};
  registerModel:any = {};
  forgotPasswordModel:any ={};
  loading = false;
  returnUrl: string;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private accountService: AccountService) { 
     
   }

  ngOnInit() {
    this.authenticationService.logout();
    $('.forgotpassword-form').hide();
    /*
    $('.message a').click(function () {
          $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
    */
    $('.forgotpass').click(function(){
         $('form').hide();
        $('.forgotpassword-form').animate({ opacity: "toggle" }, "slow");
    });
    $('.back-login').click(function(){
        $('form').hide();
        $('.login-form').animate({ opacity: "toggle" }, "slow");
    });
     $('.back-register').click(function(){
        $('form').hide();
        $('.register-form').animate({ opacity: "toggle" }, "slow");
    });
  }
  loginFunction(){
     this.loading = true;
    var username = this.model.username;
    var password  =this.model.password;
     this.authenticationService.login(username, password).subscribe(response=>{
       if(response !=undefined && response !=null){
         if(response ===true){
           toastr.success("Thành công");
            this.router.navigate(['/']);
         }          
       }
     }, error=>{
       console.log(error);
        this.loading = false;
        toastr.error("Tên đăng nhập hoặc mật khẩu không đúng");
     });  
  }
  registerFunction(){
      this.loading = true;
      
       this.accountService.register(this.registerModel).subscribe(response=>{
       if(response !=undefined && response !=null){
         if(response ===true){
              toastr.success("Chúc mừng bạn đăng ký tài khoản thành công.");
           // this.router.navigate(['/']);
           $('.register-form').hide();
           $('.login-form').show('slow');
            this.loading = false;
         }
         else{
             toastr.error("Đăng ký tài khoản thất bại.");
              this.loading = false;
         }
         
       }
     }, error=>{
       console.log(error);
        toastr.error("Có lỗi xảy ra trong quá trình xử lý.");
        this.loading = false;
     });
  }
  forgotPasswordFunction(){
     var username = this.model.username;
     var forgotPassword = {
        username:username
     };

      this.loading = true;
      
       this.accountService.forgotPassword(forgotPassword).subscribe(response=>{
       if(response !=undefined && response !=null){
         if(response ===true){
              toastr.success("Yêu cầu của bạn đang được xử lý.");
           // this.router.navigate(['/']);
           $('.register-form').hide();
           $('.login-form').show('slow');
            this.loading = false;
         }
         else{
             toastr.error("Không tìm thấy tài khoản.");
              this.loading = false;
         }
         
       }
     }, error=>{
       console.log(error);
        toastr.error("Có lỗi xảy ra trong quá trình xử lý.");
        this.loading = false;
     });
  }
}

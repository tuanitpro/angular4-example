import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
		tokenGetter: (() => sessionStorage.getItem('token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

import { AuthGuard } from './_services/AuthGuard.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';

import {AuthenticationService} from './_services/authentication.service';
import {QuoteService} from './_services/Quote.service';
import { QuoteComponent } from './quote/quote.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    MembersComponent,
    IntroComponent,
    LoginComponent,
    QuoteComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
     
     {
          path:'intro',          
          component: IntroComponent,
          
    },
    {
          path:'about',          
          component: AboutComponent,
          
    },
      {
          path:'quote',          
          component: QuoteComponent,
          canActivate: [AuthGuard]
          
    },
    {
          path:'member',
          component: MembersComponent,
    },
    {
      path:'login',
          component: LoginComponent,
    },
    {
          path:'product',
          component: ProductComponent,
    },
    {
        path: '', 
        component: HomeComponent, 
        canActivate: [AuthGuard] 
  },

    // otherwise redirect to home
    { 
      path: '**', 
      redirectTo: '' }
    ]),
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
     AuthGuard,
     QuoteService,
     AuthenticationService
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

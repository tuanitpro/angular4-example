import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Title }     from '@angular/platform-browser';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
		tokenGetter: (() => sessionStorage.getItem('token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

/* HELPERS */
import { GlobalService } from './_helpers/Global.service';
import { AuthGuard } from './_helpers/AuthGuard.service';
import {PagerService} from './_helpers/Pager.service';
import {AuthenticationService} from './_helpers/authentication.service';

/* APP_API */
import {QuoteService} from './_services/Quote.service';
import {AccountService} from './_services/Account.service';
import {PagesService} from './_services/Pages.service';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';


import { QuoteComponent } from './quote/quote.component';
import { HomeComponent } from './home/home.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    MembersComponent,
    IntroComponent,
    LoginComponent,
    QuoteComponent,
    HomeComponent,
    QuoteDetailComponent,
    ShopComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    BlogComponent,
    PagesComponent,
    CartComponent
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
          canActivate: [AuthGuard],
          
          
    },
     {
          path:'quote/:id',
          component: QuoteDetailComponent,
    },
     {
          path:'pages/:id',
          component: PagesComponent,
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
          path:'shop',
          component: ShopComponent,
    },
     {
          path:'contact',
          component: ContactComponent,
    },
      {
          path:'blog',
          component: BlogComponent,
    },
    {
          path:'cart',
          component: CartComponent,
    },
    {
          path:'product',
          component: ProductComponent,
    },
    {
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full', 
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
    Title,
     GlobalService,
     AuthGuard,
     QuoteService,
     PagerService,
     AccountService,
     AuthenticationService,
     PagesService
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

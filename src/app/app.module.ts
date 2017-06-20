import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    MembersComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
          path:'member',
          component: MembersComponent,
    },
    {
          path:'product',
          component: ProductComponent,
    }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

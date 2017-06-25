import { Component, OnInit, EventEmitter  } from '@angular/core';
import { Router ,ActivatedRoute, Params, NavigationStart, NavigationEnd, RoutesRecognized} from '@angular/router';

import {PagesService} from '../_services/Pages.service';
import { Title }     from '@angular/platform-browser';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  private pageId: string;
  public model:any={};
   private activatedRoute: ActivatedRoute;
  constructor(private titleService: Title, 
  private pageService:PagesService ,
     private router: Router,
  private route: ActivatedRoute
  
   ) { 
    }

  ngOnInit() {
     this.pageId=  String(this.route.snapshot.params['id']);
    this.getPage(this.pageId);
     this.router.events
      .filter(event => event instanceof NavigationStart)
       
      .subscribe((event) => 
      {
             this.pageId=  String(this.route.snapshot.params['id']);
              this.getPage(this.pageId);
      });
   
  }
  getPage(pageId:string){
  this.pageService.getById(pageId).subscribe(response=>{
              this.model = response;
                this.titleService.setTitle(response.Name);
            }, error=>{
              console.log(error);
            });
  }
}
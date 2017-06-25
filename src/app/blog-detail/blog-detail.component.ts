import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute, Params, NavigationStart, NavigationEnd, RoutesRecognized} from '@angular/router';
import { Title }     from '@angular/platform-browser';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import {BlogService} from '../_services/Blog.service';
 

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
 id: Observable<any>;
public title:string;
 public blogId: number;
 public model:any={};
  constructor(
     private titleService: Title ,
    private router: Router,
  private route: ActivatedRoute,
  private blogService: BlogService) { }

  ngOnInit() {
    
     
       this.blogId=   Number(this.route.snapshot.params['id']);
            this.getBlog(this.blogId);
     this.router.events
      .filter(event => event instanceof NavigationStart)
       
      .subscribe((event) => 
      {
             this.blogId=  Number(this.route.snapshot.params['id']);
              this.getBlog(this.blogId);
      });
    
  }
  
  getBlog(blogId:number){
  this.blogService.getById(blogId).subscribe(response=>{
              this.model = response;
                this.titleService.setTitle(response.Name);
            }, error=>{
              console.log(error);
            });
  }
}
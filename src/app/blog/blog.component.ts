import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import {BlogService} from '../_services/Blog.service';
import {PagerService} from '../_helpers/Pager.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 data = [];
  blogs:any=[];
  title:string="Blog";

  // array of all items to be paged
  private allItems: any[];
  private totalItems:number;
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];
 
  constructor(private titleService: Title ,
  private blogService:BlogService, 
  private pagerService:PagerService ) { }

  ngOnInit() {
    this.titleService.setTitle("Blog");
    this.setPage(1);
  }
   setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.blogService.fetchAll(page).subscribe(response=>{
          
          this.data = response;
       
          
          this.totalItems = response.TotalItems;
      
       // get pager object from service
             this.pager = this.pagerService.getPager(this.totalItems, page, 25);
                 // get current page of items
             this.blogs = response.Data;
         // this.pagedItems =  response.Data;
        
        },error=>{
          console.log(error);
        });
       
        
        //this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
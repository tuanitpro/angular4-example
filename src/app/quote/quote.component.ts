import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../_services/Quote.service';
import {PagerService} from '../_helpers/Pager.service';
import {Quote} from '../_models/quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  data = [];
  quotes:Quote[]=[];
  title:string="Quotes";

  // array of all items to be paged
    private allItems: any[];
   private totalItems:number;
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];


  constructor(private quoteService: QuoteService, private pagerService:PagerService) { }

  ngOnInit() {
  this.setPage(1);
          
       
  }
   setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.quoteService.fetchAll(page).subscribe(response=>{
          
          this.data = response;
       
          
          this.totalItems = response.TotalItems;
      
       // get pager object from service
             this.pager = this.pagerService.getPager(this.totalItems, page, 25);
                 // get current page of items
             this.quotes = response.Data;
         // this.pagedItems =  response.Data;
        
        },error=>{
          console.log(error);
        });
       
        
        //this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}


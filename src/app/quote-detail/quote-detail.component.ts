import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import {QuoteService} from '../_services/Quote.service';
import {Quote} from '../_models/quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
 id: Observable<any>;
public title:string;
 private quoteId: number;
 public quote:any={};
  constructor(
    private router: Router,
  private route: ActivatedRoute,
  private quoteService: QuoteService) { }

  ngOnInit() {
    
     
       this.quoteId=   Number(this.route.snapshot.params['id']);
         return this.quoteService.getById(this.quoteId).subscribe(response=>{           
          this.quote = response;
          this.title = response.Author;
          
        },error=>{
          console.log(error);
        });
    
  }

}
import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../_services/Quote.service';
import {Quote} from '../_models/quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  data = [];
  quotes:Quote[]=[];
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
        return this.quoteService.fetchAll().subscribe(response=>{
           
          this.data = response;
          this.quotes = response.Data;

           
        },error=>{
          console.log(error);
        });
  }
  
}


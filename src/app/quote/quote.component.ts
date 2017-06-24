import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../_services/Quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(public quoteService: QuoteService) { }

  ngOnInit() {
        this.quoteService.fetchAll();
  }
  
}


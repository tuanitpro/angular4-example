import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {PagesService} from '../_services/Pages.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = "About Us";
  public model:any={};
  constructor(private titleService: Title, private pageService:PagesService  ) { }

  ngOnInit() {
    this.titleService.setTitle("About Us");
    this.pageService.getById("about-us").subscribe(response=>{
      this.model = response;
      
    }, error=>{
      console.log(error);
    });
  }

}

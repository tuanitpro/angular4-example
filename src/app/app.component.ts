import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Js';
   public constructor(private titleService: Title ) { }
 
    public setTitle( newTitle: string) {
       this.titleService.setTitle( newTitle );
    }
}

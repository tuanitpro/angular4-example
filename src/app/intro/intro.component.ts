import { Component, OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery.min';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  title="Angular Js";
  message=" Website đang trong quá trình xây dựng. Hãy chờ đón điều tuyệt vời sắp diễn ra!";
  constructor() { }

  ngOnInit() {
    
    // $("#Header").html(this.message);
  }

}

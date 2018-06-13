import { Component, OnInit } from '@angular/core';
import 'jquery';
import 'materialize-css/dist/js/materialize.min.js';
declare var $: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.parallax').parallax();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dtn23',
  templateUrl: './dtn23.component.html',
  styleUrls: ['./dtn23.component.css']
})
export class Dtn23Component implements OnInit {

  private crsId = "dtn23";
  private name = "Denis Niedenzu";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin ut lectus arcu bibendum at varius vel pharetra vel turpis cursus in hac habitasse.";
  private imgUrl = "../../../assets/images/dtn23.png";

  constructor() { }

  ngOnInit() {
  }

}

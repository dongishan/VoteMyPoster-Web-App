import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mb2035',
  templateUrl: './mb2035.component.html',
  styleUrls: ['./mb2035.component.css']
})
export class Mb2035Component implements OnInit {

  private crsId = "mb2035";
  private name = "Minette Bellingan";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin ut lectus arcu bibendum at varius vel pharetra vel turpis cursus in hac habitasse.";
  private imgUrl = "../../../assets/images/mb2035.png";

  constructor() { }

  ngOnInit() {
  }

}

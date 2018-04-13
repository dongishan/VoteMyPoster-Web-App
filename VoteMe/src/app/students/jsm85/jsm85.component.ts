import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsm85',
  templateUrl: './jsm85.component.html',
  styleUrls: ['./jsm85.component.css']
})
export class Jsm85Component implements OnInit {

  private crsId = "jsm85";
  private name = "James Macdonald";
  private title = "Digitally-enabled Surface Function Modification for Wide Area Applications";
  private abstract1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin ut lectus arcu bibendum at varius vel pharetra vel turpis cursus in hac habitasse.";
  private imgUrl = "../../../assets/images/jsm85.png";

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slm70',
  templateUrl: './slm70.component.html',
  styleUrls: ['./slm70.component.css']
})
export class Slm70Component implements OnInit {

  private crsId = "slm70";
  private name = "Sam Massey";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin ut lectus arcu bibendum at varius vel pharetra vel turpis cursus in hac habitasse.";
  private imgUrl = "../../../assets/images/slm70.png";

  constructor() { }

  ngOnInit() {
  }

}

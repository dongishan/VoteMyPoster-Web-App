import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfbm3',
  templateUrl: './mfbm3.component.html',
  styleUrls: ['./mfbm3.component.css']
})
export class Mfbm3Component implements OnInit {

  private crsId = "mfbm3";
  private name = "Mohd Fauzi Mohd Said";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin ut lectus arcu bibendum at varius vel pharetra vel turpis cursus in hac habitasse.";
  private imgUrl = "../../../assets/images/mfbm3.png";

  constructor() { }

  ngOnInit() {
  }

}

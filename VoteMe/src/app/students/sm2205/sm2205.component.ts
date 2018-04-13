import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm2205',
  templateUrl: './sm2205.component.html',
  styleUrls: ['./sm2205.component.css']
})
export class Sm2205Component implements OnInit {

  private crsId = "sm2205";
  private name = "Sammy Mahdi";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin ut lectus arcu bibendum at varius vel pharetra vel turpis cursus in hac habitasse.";
  private imgUrl = "../../../assets/images/sm2205.png";

  constructor() { }

  ngOnInit() {
  }

}

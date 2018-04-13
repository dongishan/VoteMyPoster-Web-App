import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ph485',
  templateUrl: './ph485.component.html',
  styleUrls: ['./ph485.component.css']
})
export class Ph485Component implements OnInit {

  private crsId = "ph485";
  private name = "Paul Hacker";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin ut lectus arcu bibendum at varius vel pharetra vel turpis cursus in hac habitasse.";
  private imgUrl = "../../../assets/images/ph485.png";

  constructor() { }

  ngOnInit() {
  }

}

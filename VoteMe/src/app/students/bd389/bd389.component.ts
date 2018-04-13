import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bd389',
  templateUrl: './bd389.component.html',
  styleUrls: ['./bd389.component.css']
})
export class Bd389Component implements OnInit {

  private crsId = "bd389";
  private name = "Berk Dogan";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin ut lectus arcu bibendum at varius vel pharetra vel turpis cursus in hac habitasse.";
  private imgUrl = "../../../assets/images/bd389.png";

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vsm28',
  templateUrl: './vsm28.component.html',
  styleUrls: ['./vsm28.component.css']
})
export class Vsm28Component implements OnInit {

  private crsId = "vsm28";
  private name = "Vinay Malhotra";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin ut lectus arcu bibendum at varius vel pharetra vel turpis cursus in hac habitasse.";
  private imgUrl = "../../../assets/images/vsm28.png";

  constructor() { }

  ngOnInit() {
  }

}

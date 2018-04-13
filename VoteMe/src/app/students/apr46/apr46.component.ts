import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apr46',
  templateUrl: './apr46.component.html',
  styleUrls: ['./apr46.component.css']
})
export class Apr46Component implements OnInit {

  private crsId = "apr46";
  private name = "Adam Rosowski";
  private title = "Nanosecond Laser Welding";
  private abstract1 = "My research focused on using nanosecond fibre lasers to weld similar and dissimilar metals. This is a new technology, invented in 2015 and my aim is find basic properties, limitations and advantages over alternative methods.";
  private imgUrl = "../../../assets/images/apr46.png";

  constructor() { }

  ngOnInit() {
  }

}

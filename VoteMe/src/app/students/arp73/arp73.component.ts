import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arp73',
  templateUrl: './arp73.component.html',
  styleUrls: ['./arp73.component.css']
})
export class Arp73Component implements OnInit {

  private crsId = "arp73";
  private name = "Alosius Purnama";
  private title = "Increasing the recycled content of plastic milk bottles";
  private abstract1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin ut lectus arcu bibendum at varius vel pharetra vel turpis cursus in hac habitasse.";
  private imgUrl = "../../../assets/images/arp73.png";

  constructor() { }

  ngOnInit() {
  }

}

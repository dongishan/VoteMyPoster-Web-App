import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aa2020',
  templateUrl: './aa2020.component.html',
  styleUrls: ['./aa2020.component.css']
})
export class Aa2020Component implements OnInit {

  private crsId = "aa2020";
  private name = "Askar Aryntay";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "The overall vision is the application of IoT and potentially Distributed Ledger Technologies to the Intelligent product model.";
  private imgUrl = "../../../assets/images/aa2020.png";

  constructor() { }

  ngOnInit() {
  }

}

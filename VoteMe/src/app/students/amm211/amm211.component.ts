import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amm211',
  templateUrl: './amm211.component.html',
  styleUrls: ['./amm211.component.css']
})
export class Amm211Component implements OnInit {

  private crsId = "amm211";
  private name = "Alexander Moerchel";
  private title = "Value Capture from Service Business Models";
  private abstract1 = "How can service business models be effectively protected from imitation by others?";
  private imgUrl = "../../../assets/images/amm211.png";

  constructor() { }

  ngOnInit() {
  }

}

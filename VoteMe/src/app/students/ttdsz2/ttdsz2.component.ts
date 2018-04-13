import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ttdsz2',
  templateUrl: './ttdsz2.component.html',
  styleUrls: ['./ttdsz2.component.css']
})
export class Ttdsz2Component implements OnInit {

  private crsId = "ttdsz2";
  private name = "Thayla Zomer";
  private title = "Digital Transformation and Digital Maturity in Companies from Different Sectors";
  private abstract1 = "Why does the pace of digital transformation vary among companies from different sectors? What factors influence on digital maturity/transformation performance?";
  private imgUrl = "../../../assets/images/ttdsz2.png";

  constructor() { }

  ngOnInit() {
  }

}

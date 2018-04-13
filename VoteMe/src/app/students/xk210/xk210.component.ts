import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xk210',
  templateUrl: './xk210.component.html',
  styleUrls: ['./xk210.component.css']
})
export class Xk210Component implements OnInit {

  private crsId = "xk210";
  private name = "Xinyi (Sophia) Kuang";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "How to embed sustainability into business models and value chains with resilience thinking; how to ensure sustainability along the supply chain in case of disruptions.";
  private imgUrl = "../../../assets/images/xk210.png";

  constructor() { }

  ngOnInit() {
  }

}

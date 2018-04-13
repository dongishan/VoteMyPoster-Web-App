import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hh476',
  templateUrl: './hh476.component.html',
  styleUrls: ['./hh476.component.css']
})
export class Hh476Component implements OnInit {

  private crsId = "hh476";
  private name = "Hong Hou";
  private title = "Business Ecosystem and Strategy";
  private abstract1 = "How firms can attain sustainable CA through upgrading its ecosystem?";
  private imgUrl = "../../../assets/images/hh476.png";

  constructor() { }

  ngOnInit() {
  }

}

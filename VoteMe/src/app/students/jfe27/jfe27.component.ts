import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jfe27',
  templateUrl: './jfe27.component.html',
  styleUrls: ['./jfe27.component.css']
})
export class Jfe27Component implements OnInit {

  private crsId = "jfe27";
  private name = "Jonas Ehrnsperger";
  private title = "Open IP Strategies for Emerging Technologies";
  private abstract1 = "My project is aimed at identifying the impact of Open IP strategies on technology diffusion, society and sustainability";
  private imgUrl = "../../../assets/images/jfe27.png";

  constructor() { }

  ngOnInit() {
  }

}

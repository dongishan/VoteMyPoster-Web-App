import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paa39',
  templateUrl: './paa39.component.html',
  styleUrls: ['./paa39.component.css']
})
export class Paa39Component implements OnInit {

  private crsId = "paa39";
  private name = "Pete Atkin";
  private title = "ioLaser";
  private abstract1 = "Establishing a high-resolution Laser Ablation Tomography Platform for UK Bioimaging Research\" - Biolaser is a collaboration between the IfM and NIAM, to develop a flexible, fast, and high-resolution laser ablation tomography platform, capable of imaging dry and wet plant material.";
  private imgUrl = "../../../assets/images/paa39.png";

  constructor() { }

  ngOnInit() {
  }

}

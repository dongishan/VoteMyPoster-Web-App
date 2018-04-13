import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bis24',
  templateUrl: './bis24.component.html',
  styleUrls: ['./bis24.component.css']
})
export class Bis24Component implements OnInit {

  private crsId = "bis24";
  private name = "Benjamin Schönfuß";
  private title = "Low-cost Automation in Industrial Production Systems";
  private abstract1 = "At present, rolling out a digital manufacturing system typically includes the use of high-priced equipment and a company-wide change procedure. This poses a challenge, especially for small companies, that do not have the necessary capital reserve to fund the transition. The aim of my PhD project is to investigate the potential of low-cost automation in industrial production systems and the requirements for a sequential implementation of such systems.";
  private imgUrl = "../../../assets/images/bis24.png";

  constructor() { }

  ngOnInit() {
  }

}

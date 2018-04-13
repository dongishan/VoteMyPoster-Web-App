import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jdc74',
  templateUrl: './jdc74.component.html',
  styleUrls: ['./jdc74.component.css']
})
export class Jdc74Component implements OnInit {

  private crsId = "jdc74";
  private name = "Jack Cook";
  private title = "Metallisation of Carbon Nanotubes";
  private abstract1 = "My project is aimed at the development of metal - CNT (carbon nanotube) paper laminates optimised for use in anodes of high power microwave devices.";
  private imgUrl = "../../../assets/images/jdc74.png";

  constructor() { }

  ngOnInit() {
  }

}

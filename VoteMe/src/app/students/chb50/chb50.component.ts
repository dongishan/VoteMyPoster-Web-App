import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chb50',
  templateUrl: './chb50.component.html',
  styleUrls: ['./chb50.component.css']
})
export class Chb50Component implements OnInit {

  private crsId = "chb50";
  private name = "Charlie Barty-King";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "Bio-compatible photonic material used in varied applications. In my Bio-inspired Photonics group I am currently developing a photonic liquid crystal material, Hydroxypropyl Cellulose (HPC), into the solid state using only bio-compatible raw materials.";
  private imgUrl = "../../../assets/images/chb50.png";

  constructor() { }

  ngOnInit() {
  }

}

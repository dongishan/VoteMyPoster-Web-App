import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mm893',
  templateUrl: './mm893.component.html',
  styleUrls: ['./mm893.component.css']
})
export class Mm893Component implements OnInit {

  private crsId = "mm893";
  private name = "Matija Matokovic";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "My research project will explore the cross section between governmental interagency coordination practices (drawing on associated national innovation systems theory/ political science organisational theory literature) and the scale-up journey of emerging technologies (drawing on associated technology and innovation management literature and technology innovation systems as well as transitions literature).";
  private imgUrl = "../../../assets/images/mm893.png";

  constructor() { }

  ngOnInit() {
  }

}

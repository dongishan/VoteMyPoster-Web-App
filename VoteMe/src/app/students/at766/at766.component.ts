import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at766',
  templateUrl: './at766.component.html',
  styleUrls: ['./at766.component.css']
})
export class At766Component implements OnInit {

  private crsId = "at766";
  private name = "Aocheng Tang";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "My research aims to transform our understanding of which IP (Intellectual Property) management models exist, mechanisms (how) and conditions under which (when, where) they accelerate the development, adoption and diffusion of synthetic biology in the bioeconomy, particularly targeting on synthetic engineering of plant and microbial systems.";
  private imgUrl = "../../../assets/images/at766.png";

  constructor() { }

  ngOnInit() {
  }

}

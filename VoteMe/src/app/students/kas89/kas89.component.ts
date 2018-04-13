import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kas89',
  templateUrl: './kas89.component.html',
  styleUrls: ['./kas89.component.css']
})
export class Kas89Component implements OnInit {

  private crsId = "kas89";
  private name = "Kate Sanders";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "Fabricating hierarchical structures of carbon nanomaterials for applications in catalysis, with control over nano, micro and macroscale organisation.";
  private imgUrl = "../../../assets/images/kas89.png";

  constructor() { }

  ngOnInit() {
  }

}

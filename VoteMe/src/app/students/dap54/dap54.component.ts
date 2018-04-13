import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dap54',
  templateUrl: './dap54.component.html',
  styleUrls: ['./dap54.component.css']
})
export class Dap54Component implements OnInit {

  private crsId = "dap54";
  private name = "Diego Alfredo";
  private title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit";
  private abstract1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin ut lectus arcu bibendum at varius vel pharetra vel turpis cursus in hac habitasse.";
  private imgUrl = "../../../assets/images/avatar.png";

  constructor() { }

  ngOnInit() {
  }

}

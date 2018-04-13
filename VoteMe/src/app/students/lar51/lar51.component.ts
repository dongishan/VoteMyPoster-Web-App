import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lar51',
  templateUrl: './lar51.component.html',
  styleUrls: ['./lar51.component.css']
})
export class Lar51Component implements OnInit {

  private crsId = "lar51";
  private name = "Alberto Ramirez";
  private title = "Smart Specialization";
  private abstract1 = "My PhD is based in Smart Specialization and how strategies related to it help leverage the industrial and economic growth of a región for a particular sector, methodologies that can be applicated in developing countries and how to translate success cases obtained in developed countries to developing countries conditions.";
  private imgUrl = "../../../assets/images/avatar.png";

  constructor() { }

  ngOnInit() {
  }

}

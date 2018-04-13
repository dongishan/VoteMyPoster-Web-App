import {Component, OnInit, Input} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.css']
})
export class BaseTemplateComponent implements OnInit {

  @Input() crsId: String;
  @Input() title: String;
  @Input() name: String;
  @Input() imgUrl: String;
  @Input() abstract1: String;
  private buttonText: String;
  private submittedVote: boolean = false;

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.buttonText = "Vote for my poster"
  }

  onVote() {
    this.db.object(this.crsId+'/votes').valueChanges().subscribe(vote => {
        if(this.submittedVote == false){
          let newVote = Number(vote) + 1;
          this.db.object(''+this.crsId).set({votes : newVote});
          this.submittedVote = true;
          this.buttonText = "Thank you, your vote has been recorded";
        }
    });
  }
}

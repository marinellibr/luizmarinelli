import { Component, Input, OnInit } from '@angular/core';
import { RedesSociais } from '../models/RedesSociais';

@Component({
  selector: 'app-card-social',
  templateUrl: './card-social.component.html',
  styleUrls: ['./card-social.component.scss']
})
export class CardSocialComponent implements OnInit {

  constructor() { }

  @Input() social: RedesSociais;

  ngOnInit(): void {
    console.log(this.social);
  }

}

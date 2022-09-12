import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  animations: [
    trigger('aniSocial', [
      state('inactiveOne', style({
        right: 0,
        opacity: 0
      })),
      state('activeOne', style({
        right: 200 ,
        opacity: 1       
      })),
      state('inactiveTwo', style({
        left: 0,
        opacity: 0
      })),
      state('activeTwo', style({
        left: 200,
        opacity: 1
      })),
      state('inactiveTree', style({
        top: 0,
        opacity: 0
      })),
      state('activeTree', style({
        top: 120,
        opacity: 1
      })),

      transition('inactiveOne => activeOne', animate('200ms ease-in')),
      transition('activeOne => inactiveOne', animate('200ms ease-out')),

      transition('inactiveTwo => activeTwo', animate('200ms ease-in')),
      transition('activeTwo => inactiveTwo', animate('200ms ease-out')),

      transition('inactiveTree => activeTree', animate('200ms ease-in')),
      transition('activeTree => inactiveTree', animate('200ms ease-out')),
    ])
  ]
})
export class SocialComponent implements OnInit {

  public stateOne: string = "inactiveOne";
  public stateTwo: string = "inactiveTwo";
  public stateTree: string = "inactiveTree";

  constructor() { }

  ngOnInit(): void {
  }


  onclick(){    
    this.stateOne = this.stateOne === 'activeOne' ? 'inactiveOne': 'activeOne';
    this.stateTwo = this.stateTwo === 'activeTwo' ? 'inactiveTwo': 'activeTwo';
    this.stateTree = this.stateTree === 'activeTree' ? 'inactiveTree': 'activeTree';

}
}
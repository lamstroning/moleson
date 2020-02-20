import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-type-account',
  templateUrl: './type-account.component.html',
  styleUrls: ['./type-account.component.scss']
})
export class TypeAccountComponent implements OnInit {
	choice = 0;
	nextStep = 'none';
  constructor() { }

  switchChoice(id) {
 	this.choice = id;
 	this.nextStep = id === 1 ? '/auth/register/typeAccount/company-account' : '/auth/register/typeAccount/person-account';
  }
  ngOnInit() {
  }

}

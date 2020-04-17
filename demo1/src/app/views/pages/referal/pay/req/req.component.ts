import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-req',
  templateUrl: './req.component.html',
  styleUrls: ['./req.component.scss']
})
export class ReqComponent implements OnInit {

  constructor() { }
	rows = [
		{id: 1, user: 'Durov', cost: '1234$', paySystem: '36', state: 'На согласовании', checked: false},
		{id: 2, user: 'Durov', cost: '1234$', paySystem: '36', state: 'Выплачено', checked: false},
		{id: 3, user: 'Durov', cost: '1234$', paySystem: '36', state: 'Отказ', checked: false},
		{id: 4, user: 'Durov', cost: '1234$', paySystem: '36', state: 'Отказ', checked: false},
		{id: 5, user: 'Durov', cost: '1234$', paySystem: '36', state: 'На согласовании', checked: false},
		{id: 6, user: 'Durov', cost: '1234$', paySystem: '36', state: 'На согласовании', checked: false},
	];
	checkAll = false;
	ngOnInit() {
	}
	allCheckClick() {
		this.checkAll = !this.checkAll;
		for (const checkBox of this.rows) {
			checkBox.checked = this.checkAll;
		}
	}
}

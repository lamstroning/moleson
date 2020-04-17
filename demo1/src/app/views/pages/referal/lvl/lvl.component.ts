import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-lvl',
  templateUrl: './lvl.component.html',
  styleUrls: ['./lvl.component.scss']
})
export class LvlComponent implements OnInit {

  constructor() { }
	rows = [
		{id: 1, lvl: '1', procent: '14', Users: '42', checked: false},
		{id: 2, lvl: '2', procent: '4', Users: '42', checked: false},
		{id: 3, lvl: '3', procent: '24', Users: '42', checked: false},
		{id: 4, lvl: '4', procent: '32', Users: '42', checked: false},
		{id: 5, lvl: '5', procent: '1', Users: '42', checked: false},
		{id: 6, lvl: '6', procent: '16', Users: '42', checked: false},
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

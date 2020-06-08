import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-main-ref',
  templateUrl: './main-ref.component.html',
  styleUrls: ['./main-ref.component.scss']
})
export class MainRefComponent implements OnInit {

  constructor() { }
	rows = [
		{id: 1, login: 'Durov', name: 'Павел', sName: 'Дуров', email: 'Pavel@vk.com', checked: false},
		{id: 2, login: 'Durov', name: 'Павел', sName: 'Дуров', email: 'Pavel@vk.com', checked: false},
		{id: 3, login: 'Durov', name: 'Павел', sName: 'Дуров', email: 'Pavel@vk.com', checked: false},
		{id: 4, login: 'Durov', name: 'Павел', sName: 'Дуров', email: 'Pavel@vk.com', checked: false},
		{id: 5, login: 'Durov', name: 'Павел', sName: 'Дуров', email: 'Pavel@vk.com', checked: false},
		{id: 6, login: 'Durov', name: 'Павел', sName: 'Дуров', email: 'Pavel@vk.com', checked: false},
	];
 	 checkAll = false;
	allCheckClick() {
		this.checkAll = !this.checkAll;
		for (const checkBox of this.rows) {
			checkBox.checked = this.checkAll;
		}
	}
  ngOnInit() {
  }

}

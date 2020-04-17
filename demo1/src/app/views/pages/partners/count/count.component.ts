import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'kt-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
	menu: NavMenu[] = [
		{name: 'Транзакции', link: '/partners/count/transition'},
		{name: 'Вывод средств', link: '/partners/count/conclusion'},
		// {name: 'Доступные способы на вывод', link: '/partners/count/ways'},
		// {name: 'Реферальные отчисления', link: '/partners/count/allocations'},
	];

	constructor(router: Router) {
		router.navigate(['/partners/count/transition']);
	}
  ngOnInit() {
  }

}

export interface NavMenu {
	name: string;
	link: string;
}

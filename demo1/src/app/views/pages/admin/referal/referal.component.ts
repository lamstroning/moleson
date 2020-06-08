import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'kt-referal',
  templateUrl: './referal.component.html',
  styleUrls: ['./referal.component.scss']
})
export class ReferalComponent implements OnInit {

	menu: NavMenu[] = [
		{name: 'Партнеры', link: '/referal/main'},
		{name: 'Выплаты', link: '/referal/pay'},
		{name: 'Уровень', link: '/referal/lvl'},
	];
	constructor(router: Router) {
		router.navigate(['/referal/main']);
	}
	ngOnInit() {
	}

}

export interface NavMenu {
	name: string;
	link: string;
}

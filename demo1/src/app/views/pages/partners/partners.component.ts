import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'kt-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
	menu: NavMenu[] = [
		{name: 'Структура клиентов', link: '/partners/struct'},
		{name: 'Зарегистрировать', link: '/partners/reg'},
		{name: 'Партнёрский счёт', link: '/partners/count'},
		{name: 'Реферальная ссылка', link: '/partners/ref-link'},
		];
	constructor(router: Router) {
		router.navigate(['/partners/struct']);
	}
	ngOnInit() {
	}

}

export interface NavMenu {
	name: string;
	link: string;
}

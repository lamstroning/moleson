import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'kt-struct',
	templateUrl: './struct.component.html',
	styleUrls: ['./struct.component.scss']
})
export class StructComponent implements OnInit {
	menu: NavMenu[] = [
		{name: 'Структура', link: 'main'},
		{name: 'Статистика', link: 'state'},
		// {name: 'График', link: 'graph'}
	];

	constructor(router: Router) {
		router.navigate(['/partners/struct/main']);
	}
	ngOnInit() {
	}

}

interface NavMenu {
	name: string;
	link: string;
}

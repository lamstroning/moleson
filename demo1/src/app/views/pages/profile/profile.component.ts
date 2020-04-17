import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'kt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit  {
	menu: NavMenu[] = [
		{name: 'Профиль', link: '/profile/common/'},
		{name: 'Верификация', link: '/profile/verification/'},
		{name: 'Настройка', link: '/profile/settings/'}
	];
	constructor(router: Router) {
		router.navigate(['/profile/common']);
	}
	ngOnInit() {

	}
}
export interface NavMenu {
	name: string;
	link: string;
}

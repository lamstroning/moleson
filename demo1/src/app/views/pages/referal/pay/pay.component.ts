import { Component, OnInit } from '@angular/core';
import {NavMenu} from '../referal.component';
import {Router} from '@angular/router';

@Component({
  selector: 'kt-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

	menu: NavMenu[] = [
		{name: 'Запрос', link: '/referal/pay/req'},
		{name: 'Статистика', link: '/referal/pay/state'},
	];
	constructor(router: Router) {
		router.navigate(['/referal/pay/req']);
	}

  ngOnInit() {
  }

}

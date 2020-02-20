// Angular
import { Component, Input, OnInit } from '@angular/core';

export interface Timeline2Data {
	time: string;
	text: string;
	icon?: string;
	attachment?: string;
}

@Component({
	selector: 'kt-timeline2',
	templateUrl: './timeline2.component.html',
	styleUrls: ['./timeline2.component.scss']
})
export class Timeline2Component implements OnInit {
	// Public properties
	@Input() data: Timeline2Data[];

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		if (!this.data) {
			this.data = [
				{
					time: '10:00',
					icon: 'fa fa-genderless kt-font-danger',
					text: 'Обновлено Пользовательское соглашение',
				},
				{
					time: '12:45',
					icon: 'fa fa-genderless kt-font-success',
					text: 'Новые контакты',
					attachment: '\n' +
						'<a href="$event.preventDefault();"><img src="./assets/media/users/100_4.jpg" title="" alt=""></a>' +
						'<a href="$event.preventDefault();"><img src="./assets/media/users/100_13.jpg" title="" alt=""></a>' +
						'<a href="$event.preventDefault();"><img src="./assets/media/users/100_11.jpg" title="" alt=""></a>' +
						'<a href="$event.preventDefault();"><img src="./assets/media/users/100_14.jpg" title="" alt=""></a>'
				},
				{
					time: '14:00',
					icon: 'fa fa-genderless kt-font-brand',
					text: 'Проект <a href="$event.preventDefault();" class="kt-link kt-link--brand kt-font-bolder">Горки</a> был добавлен в избранное>USD 700 To ESL.',
				},
				{
					time: '17:00',
					icon: 'fa fa-genderless kt-font-info',
					text: 'Проведено частичное финансирование проекта <a href="$event.preventDefault();" class="kt-link kt-link--brand kt-font-bolder">Новые Вешки</a>',
				},
				{
					time: '16:00',
					icon: 'fa fa-genderless kt-font-brand',
					text: 'С 05.10.2019 наша компания ввела систему ПИН-кодов, они позволят нашим инвесторам обезопасить свои средства.',
				},
				{
					time: '17:00',
					icon: 'fa fa-genderless kt-font-danger',
					text: 'Добавлен новый <a href="$event.preventDefault();" class="kt-link kt-link--brand kt-font-bolder">Договор</a>',
				},
				{
					time: '17:00',
					icon: 'fa fa-genderless kt-font-danger',
					text: 'Проведена <a href="$event.preventDefault();" class="kt-link kt-link--brand kt-font-bolder">Верификация</a> аккаунта',
				},
			];
		}
	}
}

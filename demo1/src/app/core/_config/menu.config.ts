export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Инвестиции',
					root: true,
					alignment: 'left',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Каталог франшиз',
					root: true,
					alignment: 'left',
					toggle: 'click',
					page: '/catalog-project'
				},
				{
					title: 'Мои франшизы',
					root: true,
					alignment: 'left',
					toggle: 'click',
					page: '/profile'
				},
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Дашборд',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{section: 'Франшизы'},
				{
					title: 'Управление',
					root: true,
					bullet: 'line',
					icon: 'flaticon2-browser-2',
					submenu : [
						{
							title: 'Мои франшизы',
							bullet: 'line',
							icon: '',
						},
						{
							title: 'Договора',
							bullet: 'line',
							icon: '',
						},
					]
				},
				{
					title: 'Как это работает',
					root: true,
					bullet: 'line',
					icon: 'flaticon2-browser-2',
					submenu : [
						{
							title: 'Доход',
							bullet: 'line',
							icon: '',
						},
						{
							title: 'Законодательство',
							bullet: 'line',
							icon: '',
						},
					]
				},
				{section: 'Объекты и проекты'},
				{
					title: 'Мои франшизы',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					page: '/my-project'
				},
				{
					title: 'Каталог франшиз',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					page: '/catalog-project'
				},
				{section: ' '},
				{
					title: 'Верификация',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
				},
				{section: 'Администрирование'},
				{
					title: 'Пользователи',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}

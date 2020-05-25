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
				// {
				// 	title: 'Мои франшизы',
				// 	root: true,
				// 	alignment: 'left',
				// 	toggle: 'click',
				// 	page: '/profile'
				// },
				{
					title: 'Партнерам',
					root: true,
					alignment: 'left',
					toggle: 'click',
					page: '/partners'
				},
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Инвестиции',
					root: true,
					public: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				// {section: 'Франшизы'},
				// {
				// 	title: 'Управление',
				// 	root: true,
				// 	public: true,
				// 	bullet: 'line',
				// 	icon: 'flaticon2-browser-2',
				// 	submenu : [
				// 		{
				// 			title: 'Мои франшизы',
				// 			bullet: 'line',
				// 			icon: '',
				// 		},
				// 		{
				// 			title: 'Договора',
				// 			bullet: 'line',
				// 			icon: '',
				// 		},
				// 	]
				// },
				// {
				// 	title: 'Как это работает',
				// 	root: true,
				// 	bullet: 'line',
				// 	public: true,
				// 	icon: 'flaticon2-browser-2',
				// 	submenu : [
				// 		{
				// 			title: 'Доход',
				// 			bullet: 'line',
				// 			icon: '',
				// 		},
				// 		{
				// 			title: 'Законодательство',
				// 			bullet: 'line',
				// 			icon: '',
				// 		},
				// 	]
				// },
				// {
				// 	section: 'Объекты и проекты',
				// 	public: true
				// },
				// {
				// 	title: 'Мои франшизы',
				// 	root: true,
				// 	bullet: 'dot',
				// 	icon: 'flaticon2-browser-2',
				// 	page: '/my-project',
				// 	public: true
				// },
				{
					title: 'Каталог франшиз',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					page: '/catalog-project',
					public: true
				},
				// {
				// section: ' ',
				// public: true
				// },
				// {
				// 	title: 'Верификация',
				// 	root: true,
				// 	bullet: 'dot',
				// 	icon: 'flaticon2-browser-2',
				// 	public: true
				// },
				{
					section: 'Администрирование',
					public: false
				},
				{
					title: 'Пользователи',
					root: true,
					bullet: 'dot',
					page: '/users',
					icon: 'flaticon2-browser-2',
					public: false
				},
				{
					title: 'Объекты',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					page: '/objects',
					public: false
				},
				{
					title: 'Реферальная система',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					page: '/referal',
					public: false
				},
				{
					title: 'Уровни',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					page: '/lvlEdit',
					public: false
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}

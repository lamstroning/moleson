// Angular
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// RxJS
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
// Object-Path
import * as objectPath from 'object-path';
// Services
import { PageConfigService } from './page-config.service';
import { MenuConfigService } from './menu-config.service';

export interface Breadcrumb {
	title: string;
	page: string | any;
}

export interface BreadcrumbTitle {
	title: string;
	desc?: string;
}

@Injectable()
export class SubheaderService {
	// Public properties
	title$: BehaviorSubject<BreadcrumbTitle> = new BehaviorSubject<BreadcrumbTitle>({title: '', desc: ''});
	breadcrumbs$: BehaviorSubject<Breadcrumb[]> = new BehaviorSubject<Breadcrumb[]>([]);
	disabled$: Subject<boolean> = new Subject<boolean>();
	client: Client = {id: 0, avatar: '/assets/media/users/custom/user1.png', name: 'Леонид Гаврилов', percent: 12, position: 'Физическое лицо'};
	catalog: CatalogItem[] = [
		{id: 0, client: this.client, favorite: false, introduced: 1500, marker: 'Новое', price: 10000, title: '24-й км Калужского шоссе', img: '/assets/media/products/cottage/cottage2.png', detailImg:'/assets/media/products/cottage/cottage3-big.png'},
		{id: 1, client: this.client, favorite: false, introduced: 25000, marker: 'Проверенные', price: 35200, title: '24-й км Калужского шоссе', img: '/assets/media/products/cottage/cottage3.png', detailImg:'/assets/media/products/cottage/cottage3-big.png'},
		{id: 2, client: this.client, favorite: false, introduced: 1000, marker: 'Новое', price: 21200, title: '24-й км Калужского шоссе', img: '/assets/media/products/cottage/cottage4.png', detailImg:'/assets/media/products/cottage/cottage3-big.png'},
		{id: 3, client: this.client, favorite: false, introduced: 32300, marker: 'Новое', price: 45600, title: '24-й км Калужского шоссе', img: '/assets/media/products/cottage/cottage3.png', detailImg:'/assets/media/products/cottage/cottage3-big.png'},
		{id: 4, client: this.client, favorite: false, introduced: 23200, marker: 'Проверенные', price: 24800, title: '24-й км Калужского шоссе', img: '/assets/media/products/cottage/cottage2.png', detailImg:'/assets/media/products/cottage/cottage3-big.png'},
		{id: 5, client: this.client, favorite: false, introduced: 12300, marker: 'Проверенные', price: 45600, title: '24-й км Калужского шоссе', img: '/assets/media/products/cottage/cottage4.png', detailImg:'/assets/media/products/cottage/cottage3-big.png'},
	];
	showSection(catalog:CatalogItem):boolean {
		let section:string;
		for (const item of this.filter) {
			if (item.active) {
				section = item.title;
				break ;
			}
		}
		if (section === 'Избранные'){
			return (catalog.favorite);
		} else if (section === undefined) {
			return true;
		} else {
			return (section === catalog.marker);
		}
	}
	filter: Filter[] = [
		{id: 0, title: 'Новое', active: false},
		{id: 1, title: 'Избранные', active: false},
		{id: 2, title: 'Проверенные', active: false},
	];
	filterState(menuItem:Filter) {
		if (menuItem.active) {
			menuItem.active = false;
			return ;
		}
		for (const item of this.filter) {
			item.active = false;
		}
		menuItem.active = true;
	}
	getPrecent(aim:number, sum: number) {
		return ((sum / (aim / 100)).toFixed(1));
	}
	// Private properties
	private manualBreadcrumbs: any = {};
	private appendingBreadcrumbs: any = {};
	private manualTitle: any = {};

	private asideMenus: any;
	private headerMenus: any;
	private pageConfig: any;

	/**
	 * Service Constructor
	 *
	 * @param router: Router
	 * @param pageConfigService: PageConfigServie
	 * @param menuConfigService: MenuConfigService
	 */
	constructor(
		private router: Router,
		private pageConfigService: PageConfigService,
		private menuConfigService: MenuConfigService) {
		const initBreadcrumb = () => {
			// get updated title current page config
			this.pageConfig = this.pageConfigService.getCurrentPageConfig();

			this.headerMenus = objectPath.get(this.menuConfigService.getMenus(), 'header');
			this.asideMenus = objectPath.get(this.menuConfigService.getMenus(), 'aside');

			// update breadcrumb on initial page load
			this.updateBreadcrumbs();

			if (objectPath.get(this.manualTitle, this.router.url)) {
				this.setTitle(this.manualTitle[this.router.url]);
			} else {
				// get updated page title on every route changed
				this.title$.next(objectPath.get(this.pageConfig, 'page'));

				// subheader enable/disable
				const hideSubheader = objectPath.get(this.pageConfig, 'page.subheader');
				this.disabled$.next(typeof hideSubheader !== 'undefined' && !hideSubheader);

				if (objectPath.get(this.manualBreadcrumbs, this.router.url)) {
					// breadcrumbs was set manually
					this.setBreadcrumbs(this.manualBreadcrumbs[this.router.url]);
				} else {
					// get updated breadcrumbs on every route changed
					this.updateBreadcrumbs();
					// breadcrumbs was appended before, reuse it for this page
					if (objectPath.get(this.appendingBreadcrumbs, this.router.url)) {
						this.appendBreadcrumbs(this.appendingBreadcrumbs[this.router.url]);
					}
				}
			}
		};

		initBreadcrumb();

		// subscribe to router events
		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(initBreadcrumb);
	}

	/**
	 * Update breadCrumbs
	 */
	updateBreadcrumbs() {
		// get breadcrumbs from header menu
		let breadcrumbs = this.getBreadcrumbs(this.headerMenus);
		// if breadcrumbs empty from header menu
		if (breadcrumbs.length === 0) {
			// get breadcrumbs from aside menu
			breadcrumbs = this.getBreadcrumbs(this.asideMenus);
		}

		if (
			// if breadcrumb has only 1 item
			breadcrumbs.length === 1 &&
			// and breadcrumb title is same as current page title
			breadcrumbs[0].title.indexOf(objectPath.get(this.pageConfig, 'page.title')) !== -1) {
			// no need to display on frontend
			breadcrumbs = [];
		}

		this.breadcrumbs$.next(breadcrumbs);
	}

	/**
	 * Manually set full breadcrumb paths
	 */
	setBreadcrumbs(breadcrumbs: Breadcrumb[] | any[]) {
		this.manualBreadcrumbs[this.router.url] = breadcrumbs;
		this.breadcrumbs$.next(breadcrumbs);
	}

	/**
	 * Append breadcrumb to the last existing breadcrumbs
	 * @param breadcrumbs
	 */
	appendBreadcrumbs(breadcrumbs: Breadcrumb[] | any[]) {
		this.appendingBreadcrumbs[this.router.url] = breadcrumbs;
		const prev = this.breadcrumbs$.getValue();
		this.breadcrumbs$.next(prev.concat(breadcrumbs));
	}

	/**
	 * Get breadcrumbs from menu items
	 * @param menus
	 */
	getBreadcrumbs(menus: any) {
		let url = this.pageConfigService.cleanUrl(this.router.url);
		url = url.replace(new RegExp(/\./, 'g'), '/');

		const breadcrumbs = [];
		const menuPath = this.getPath(menus, url) || [];
		menuPath.forEach(key => {
			menus = menus[key];
			if (typeof menus !== 'undefined' && menus.title) {
				breadcrumbs.push(menus);
			}
		});

		return breadcrumbs;
	}

	/**
	 * Set title
	 *
	 * @param title: string
	 */
	setTitle(title: string) {
		this.manualTitle[this.router.url] = title;
		this.title$.next({title});
	}

	/**
	 * Get object path by value
	 * @param obj
	 * @param value
	 */
	getPath(obj, value) {
		if (typeof obj !== 'object') {
			return;
		}
		const path = [];
		let found = false;

		const search = (haystack) => {
			// tslint:disable-next-line:forin
			for (const key in haystack) {
				path.push(key);
				if (haystack[key] === value) {
					found = true;
					break;
				}
				if (typeof haystack[key] === 'object') {
					search(haystack[key]);
					if (found) {
						break;
					}
				}
				path.pop();
			}
		};

		search(obj);
		return path;
	}
}
interface Filter {
	id: number;
	title: string;
	active: boolean;
}
interface Client {
	id: number;
	avatar: string;
	name: string;
	position: string;
	percent: number;
}
export interface CatalogItem {
	id: number;
	marker: string;
	img: string;
	detailImg: string;
	price: number;
	title: string;
	client: Client;
	favorite: boolean;
	introduced: number;
}

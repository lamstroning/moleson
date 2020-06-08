import {ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubheaderService} from '../../../core/_base/layout';
import {MatDialog} from '@angular/material';
import {FranchisesService} from '../../../core/franchises';
import {Franchises} from '../../../core/franchises/_service/franchises.service';
import {filter} from 'rxjs/operators';

@Component({
	selector: 'kt-catalog-card-detail',
	templateUrl: './catalog-card-detail.component.html',
	styleUrls: ['./catalog-card-detail.component.scss']
})

export class CatalogCardDetailComponent implements OnInit {
	catalogItem: Franchises;
	money: number;
	buyStocks = 0;
	maxCountStock;

	constructor(private activateRoute: ActivatedRoute,
				         public subheaderService: SubheaderService,
				         private router: Router,
				         public dialog: MatDialog,
				         private franchisesService: FranchisesService,
				         private cdr: ChangeDetectorRef) {
	}

	getPrecent(type: string) {
		if (type === 'new') {
			return (((this.catalogItem.purchasedShares + this.buyStocks) / (this.catalogItem.stocks / 100)).toFixed() + '%');
		} else {
			return ((this.catalogItem.purchasedShares / (this.catalogItem.stocks / 100)).toFixed() + '%');
		}
	}

	buy() {
		this.franchisesService.buyFranchises({
			_id: this.catalogItem._id,
			stocks: this.buyStocks
		}).subscribe(
			res => {
				console.log(res);
				alert('Успешно!');
			},
			err => {
				console.log(err);
				alert('Недостаточно средств!');
			}, () => {
				this.cdr.detectChanges();
			});
	}

	ngOnInit() {
		let id: string;
		this.activateRoute.params.subscribe(params => id = params.id);
		this.franchisesService.getFranchises().pipe(
			filter(searchId => searchId._id === id)
		).subscribe(res => {
			console.log(res);
			if (res) {
				this.money = res.stock.price * res.stocks;
				this.catalogItem = res;
				this.maxCountStock = res.stocks - res.purchasedShares;
				if (window.location.href.indexOf('localhost:4200') !== -1) {
					const localPic = this.catalogItem.picture.split('/');
					localPic[0] = 'http://maxim.fvds.ru';
					this.catalogItem.picture = localPic.join('/');
					console.log(res.picture);
				}
			} else {
				this.router.navigateByUrl('error/404');
			}
		}, err => console.log(err), () => {
			console.log('complate');
		});
	}
}

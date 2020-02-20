import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubheaderService} from '../../../core/_base/layout'
import {CatalogItem} from "../../../core/_base/layout/services/subheader.service";
import {MatDialog,MatDialogRef} from "@angular/material"
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
	selector: 'kt-catalog-card-detail',
	templateUrl: './catalog-card-detail.component.html',
	styleUrls: ['./catalog-card-detail.component.scss']
})

export class CatalogCardDetailComponent implements OnInit {
	catalogItem: CatalogItem;
	precent: string;
	constructor(private activateRoute: ActivatedRoute, public subheaderService: SubheaderService, private router: Router, public dialog: MatDialog)
	{
		for (let item of subheaderService.catalog) {
			if (item.id === parseInt(activateRoute.snapshot.params['id'])) {
				this.catalogItem = item;
				this.precent = subheaderService.getPrecent(item.price, item.introduced);
				break ;
			}
		}
		if (this.catalogItem === undefined){
			router.navigate(['error/404'])
		}
	}
	openDialog() {
		this.dialog.open(FirstDialog,{
			width: '1140px',
			data: {
				precent:  this.precent,
				catalogItem: this.catalogItem
			}
		});
	}

	ngOnInit() {
	}

}

@Component({
	selector: 'modal',
	template: `
        <div #slider class="row modal-container">
			<div class="container">
				<div class="close-pop-up" (click)="closeDialog()"></div>
				<div class="row">
					<div class="col-xl-7">
						<div class="catalog-detail-img" [style.background-image]="'url('+data.catalogItem.detailImg+')'">
							<div class="card-item-img-row">
								<div class="card-item-marker">{{data.catalogItem.marker}}</div>
								<div class="card-item-cost">{{data.catalogItem.price}}$</div>
							</div>
						</div>
						<div class="card-item-user">
							<div class="card-item-user-info">
								<div class="card-item-user-avatar"
									 [style.background-image]="'url('+data.catalogItem.client.avatar+')'"></div>
								<div class="card-item-user-info-content">
									<div class="card-item-user-info-name">{{data.catalogItem.client.name}}</div>
									<div class="card-item-user-info-position">{{data.catalogItem.client.position}}</div>
								</div>
							</div>
							<div class="card-item-user-cost">
								<div class="card-item-user-cost-precent">{{data.catalogItem.client.percent}}%</div>
								<div class="card-item-user-cost-info">Годовых</div>
							</div>
						</div>
					</div>
					<div class="col-xl-5">
						<div class="row h-50">
							<div class="col-xl-6">
								<div class="grid-col-modal">
									<div class="grid-col-modal-title">Минимальная сумма</div>
									<div class="grid-col-modal-info font-bold">100$</div>
								</div>
							</div>
							<div class="col-xl-6">
								<div class="grid-col-modal-title">Максимальная сумма</div>
								<div class="grid-col-modal-info font-bold">{{data.catalogItem.price - data.catalogItem.introduced}}$</div>
							</div>
						</div>
						<div class="row h-50">
							<div class="col-xl-6">
								<div class="grid-col-modal-title">Срок реализации проекта</div>
								<div class="grid-col-modal-info">2 года</div>
							</div>
							<div class="col-xl-6">
								<div class="grid-col-modal-title">Тип инвестиций</div>
								<div class="grid-col-modal-info">По договору займа</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-xl-6">
						<div class="progress-bar-container">
							<div class="progress-bar-done">
								<div class="progress-bar-done-section">
									<b>{{data.precent}}% </b>
									<span> Проинвестировно</span>
								</div>
								<div class="progress-bar-done-section">
									<b>{{data.catalogItem.price - data.catalogItem.introduced}}$</b> <span> осталось</span>
								</div>
							</div>
							<div class="progress-bar-count-investor"><b>63 </b> <span> Инвестора</span></div>
							<div class="kt-widget12__progress">
								<div class="progress kt-progress--sm position-relative">
									<div class="progress-bar bg-success position-absolute bar-remains" role="progressbar"
										 [style.width]="getPrecent(this.value, data.catalogItem.price, data.precent) + '%'"
										 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
										<div class="bg-success-remains">+ {{this.value}}$</div>
									</div>
									<div class="progress-bar bg-success position-absolute" role="progressbar"
										 [style.width]="data.precent + '%'"
										 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
										<div class="bg-success-remains">{{data.catalogItem.introduced}}$</div>
									</div>
								</div>
								<mat-slider [max]="data.catalogItem.price - data.catalogItem.introduced"
											[min]="100"
											[step]="1"
											[thumbLabel]="true"
											[color]="'accent'"
											[(ngModel)]="this.value"></mat-slider>
								<div class="remains-cost">
									{{this.value}}$
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-xl-3 mt-4 d-flex justify-content-center">
						<button mat-raised-button class="w-100" [style.background-color]="'#F4EDF5'" [style.color]="'#8F49B1'">Посмотреть документы</button>
						<div class="btn-ico" [style.background-color]="'#8F49B1'"></div>
					</div>
					<div class="col-xl-3 mt-4 d-flex justify-content-center">
						<button (click)="animateScroll(this.slider.scrollWidth / 2, true)" mat-raised-button class="w-100" [style.background-color]="'#8F49B1'" [style.color]="'white'">Инвестировать</button>
					</div>
				</div>
            </div>
			<div class="container">
                <div class="row">
                    <div class="col-xl-12">
						<div class="arrow-back" (click)="animateScroll(0, false)"></div>
						<div class="catalog-detail-img" [style.background-image]="'url('+data.catalogItem.detailImg+')'"></div>
					</div>
				</div>
                <div class="row justify-content-center">
						<div class="accept-title">Инвестиционный проект: </div> <div class="accept-title-color">{{data.catalogItem.title}}</div>
                </div>
                <div class="row justify-content-center">
                    <div class="accept-title">процентная стака: </div> <div class="accept-title-color">{{data.catalogItem.client.percent}} годовых</div>
                </div>
                <div class="row justify-content-center deal-info">
                    <div class="col-xl-3">
						<div class="deal-block">
                            <div class="deal-block-cost color-green">24353$</div>
                            <div class="deal-block-title">Ваш счет</div>
                        </div>
					</div>
                    <div class="col-xl-1 line-block">
                        <div class="line-block-line"></div>
					</div>
                    <div class="col-xl-3">
                        <div class="deal-block">
                            <div class="deal-block-cost color-def">{{this.value}}$</div>
                            <div class="deal-block-title">Сумма инвестиций</div>
                        </div>
					</div>
                </div>
                <div class="row justify-content-center licince-accept">
					<mat-checkbox [labelPosition]="'before'">Я прочитал и полностью принимаю договор</mat-checkbox>
                </div>
                <div class="row justify-content-center licince-accept">
					<mat-checkbox [labelPosition]="'before'">Согласен с Пользовательским соглашением</mat-checkbox>
                </div>
                <div class="row justify-content-center licince-accept">
                    <div class="col-xl-3">
						<button mat-raised-button class="w-100" (click)="closeDialog()" [style.background-color]="'#8F49B1'" routerLink="/terminal/" [style.color]="'white'">Подтвердить сделку</button>
                    </div>
                </div>
			</div>
        </div>
	`,
	styleUrls: ['./catalog-card-detail.component.scss']
})

export class FirstDialog {
	value = 100;
	@ViewChild('slider', {static: true}) sliderArea: ElementRef;
	constructor(
		public dialogRef: MatDialogRef<FirstDialog>,
		public dialog: MatDialog,
		@Inject(MAT_DIALOG_DATA) public data: any) {
	}

	closeDialog() {
		this.dialogRef.close();
	}
	animateScroll(distance:number, direction:boolean) {
		let stop:boolean;
		if (direction) {
			stop = this.sliderArea.nativeElement.scrollLeft + 100 >= distance;
		} else {
			stop = this.sliderArea.nativeElement.scrollLeft - 100 <= distance;
		}
		setTimeout(function() {
			if (direction) {
				this.sliderArea.nativeElement.scrollLeft += 100;
			} else {
				this.sliderArea.nativeElement.scrollLeft -= 100;
			}
			if (stop) {
				this.timeout = true;
				this.sliderArea.nativeElement.scrollLeft = distance;
				return ;
			}
			this.animateScroll(distance, direction);
		}.bind(this), 10)
	}
	getPrecent(sum: number, aim: number, remains:string){
		if (aim === 0) {
			return 0;
		}
		return ((sum / (aim / 100) + parseInt(remains, 10)).toFixed(1));
	}
}

import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {LayoutConfigService} from "../../../../../core/_base/layout";

@Component({
  selector: 'kt-custom-widget2',
  templateUrl: './custom-widget2.component.html',
  styleUrls: ['./custom-widget2.component.scss']
})

export class CustomWidget2Component implements OnInit {

	// Public properties
	@Input() data: { labels: string[], datasets: any[] };
	@Input() type = 'line';
	@ViewChild('chart', {static: true}) chart: ElementRef;
	@ViewChild('slider', {static: true}) sliderArea: ElementRef;

	timeout = true;
	//del -->
	percentProgress = '40%';
	des = 'Участок 30 га (земли ИЖС) на 24 км Московского тракта г.Тюмени для строительства современного коттеджного поселка с интересной концепцией. Участок примыкает к деревне Успенка Тюменского района.'
	//<-- del
	cottages: Slide[] = [
		{id: 0, state: 'Новый проект', title: 'Коттеджный поселок “Дубки”', price: 17500000, like: false, desc: this.des, imgSrc: '/assets/media/products/cottage/cottage1.png', income: 17, show: true},
		{id: 1, state: 'Акция', title: 'Коттеджный поселок “Апрелевка”', price: 22501000, like: true, desc: this.des, imgSrc: '/assets/media/products/cottage/cottage2.png', income: 24, show: false},
		{id: 2, state: 'Новый проект', title: 'Коттеджный поселок “Дубки”', price: 11200000, like: false, desc: this.des, imgSrc: '/assets/media/products/cottage/cottage3.png', income: 12, show: false},
		{id: 3, state: 'Новый проект', title: 'Коттеджный поселок “Дубки”', price: 1400000, like: false, desc: this.des, imgSrc: '/assets/media/products/cottage/cottage4.png', income: 7, show: false},
	];
	/**
	 * Component constructor
	 * @param layoutConfigService
	 */
	constructor(private layoutConfigService: LayoutConfigService) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {

	}
	nextSlide(slide: Slide) {
		// this.sliderArea.nativeElement.scrollLeft = (slide.id * this.sliderArea.nativeElement.clientWidth);
		if (!this.timeout) {
			return ;
		}
		this.timeout = false;
		let distance = slide.id * this.sliderArea.nativeElement.clientWidth;
		let direction = distance > this.sliderArea.nativeElement.scrollLeft;
		debugger;
		console.log('distance:' + distance);
		this.animateScroll(distance, direction);
		for (let item of this.cottages) {
			item.show = false;
		}
		slide.show = true;
	}
	animateScroll(distance:number, direction:boolean) {
		let stop:boolean;
		if (direction) {
			stop = this.sliderArea.nativeElement.scrollLeft + 20 >= distance;
		} else {
			stop = this.sliderArea.nativeElement.scrollLeft - 20 <= distance;
		}
		setTimeout(function() {
			if (direction) {
				this.sliderArea.nativeElement.scrollLeft += 20;
			} else {
				this.sliderArea.nativeElement.scrollLeft -= 20;
			}
			if (stop) {
				this.timeout = true;
				this.sliderArea.nativeElement.scrollLeft = distance;
				return ;
			}
			this.animateScroll(distance, direction);
		}.bind(this), 10)
	}
}

interface Slide {
	id: number;
	state: string;
	income: number;
	title: string;
	imgSrc: string;
	price: number;
	desc: string;
	like: boolean;
	show: boolean;
}

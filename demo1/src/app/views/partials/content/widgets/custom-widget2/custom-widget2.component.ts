import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {LayoutConfigService, SubheaderService} from "../../../../../core/_base/layout";
import {CatalogItem} from "../../../../../core/_base/layout/services/subheader.service";

@Component({
  selector: 'kt-custom-widget2',
  templateUrl: './custom-widget2.component.html',
  styleUrls: ['./custom-widget2.component.scss']
})

export class CustomWidget2Component implements OnInit {

	// Public properties
	@Input() data: { labels: string[], datasets: any[] };
	@Input() type = 'line';
	@Input() showLike = true;
	@Input() showMore = true;
	@Input() showDesc = true;
	@Input() showArrow = true;
	@Input() showSideBar = true;
	@ViewChild('chart', {static: true}) chart: ElementRef;
	@ViewChild('slider', {static: true}) sliderArea: ElementRef;

	timeout = true;
	//del -->
	des = 'Сolizeum – это сеть киберспортивных клубов и арен. На данный момент функционируют 5 клубов, которые стабильно приносят доход и окупают себя. В стадии открытия и поиска помещения еще 20. Сеть является ведущим игроком на рынке киберспорта, вызывает доверие у клиентов и становится все известнее на федеральном уровне и даже за рамками ниши.'
	//<-- del

	cottages: CatalogItem[];
	/**
	 * Component constructor
	 * @param layoutConfigService
	 * @param subheaderService
	 */
	constructor(private layoutConfigService: LayoutConfigService, public subheaderService: SubheaderService) {
		this.cottages = subheaderService.catalog;
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {

	}
	nextSlide(slide: CatalogItem) {
		// this.sliderArea.nativeElement.scrollLeft = (slide.id * this.sliderArea.nativeElement.clientWidth);
		if (!this.timeout) {
			return ;
		}
		this.timeout = false;
		let distance = slide.id * this.sliderArea.nativeElement.clientWidth;
		let direction = distance > this.sliderArea.nativeElement.scrollLeft;
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

// interface Slide {
// 	id: number;
// 	state: string;
// 	income: number;
// 	title: string;
// 	imgSrc: string;
// 	price: number;
// 	desc: string;
// 	like: boolean;
// 	show: boolean;
// }

// Angular
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// Layout config
import { LayoutConfigService } from '../../../../../core/_base/layout';

/**
 * Sample components with sample data
 */
@Component({
  selector: 'kt-custom-widget',
  templateUrl: './custom-widget.component.html',
  styleUrls: ['./custom-widget.component.scss']
})
export class CustomWidgetComponent implements OnInit {
	// Public properties
	@Input() data: { labels: string[], datasets: any[] };
	@Input() color: string;
	@Input() type = 'line';
	@ViewChild('chart', {static: true}) chart: ElementRef;

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
		if (!this.data) {
			const color = Chart.helpers.color;
			this.data = {
				labels: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
				datasets: [
					{
						lineTension: 0,
						fill: true,
						borderColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0).rgbString(),
						backgroundColor: color(this.color === undefined ? '#883BAC' : this.color).alpha(0.6).rgbString(),
						pointHoverRadius: 4,
						pointHoverBorderWidth: 12,
						pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
						pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
						pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
						pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
						data: [20, 40, 50, 25, 35, 60, 30]
					}
				]
			};
		}
		this.initChart();
	}

	private initChart() {
		// For more information about the chartjs, visit this link
		// https://www.chartjs.org/docs/latest/getting-started/usage.html

		const chart = new Chart(this.chart.nativeElement, {
			type: this.type,
			data: this.data,
			options: {
				responsive: true,
				maintainAspectRatio: false,
				legend: false,
				scales: {
					xAxes: [{
						display: !1,
						gridLines: !1,
						scaleLabel: {display: !0, labelString: "Month"}
					}],
					yAxes: [{
						display: !1,
						gridLines: !1,
						scaleLabel: {display: !0, labelString: "Value"},
						ticks: {beginAtZero: !0}
					}]
				},
				title: {
					display: false
				},
				hover: {
					mode: 'index'
				},
				tooltips: {
					enabled: true,
					intersect: false,
					mode: 'nearest',
					bodySpacing: 5,
					yPadding: 10,
					xPadding: 10,
					caretPadding: 0,
					displayColors: false,
					backgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
					titleFontColor: '#ffffff',
					cornerRadius: 4,
					footerSpacing: 0,
					titleSpacing: 0
				},
				layout: {
					padding: {
						left: 0,
						right: 0,
						top: 5,
						bottom: 5
					}
				}
			}
		});
	}
}

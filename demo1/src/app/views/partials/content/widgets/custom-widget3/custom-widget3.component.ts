import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {LayoutConfigService} from "../../../../../core/_base/layout";

@Component({
	selector: 'kt-custom-widget3',
	templateUrl: './custom-widget3.component.html',
	styleUrls: ['./custom-widget3.component.scss']
})
export class CustomWidget3Component implements OnInit {
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
						backgroundColor: color(this.color === undefined ? '#fcb12e' : this.color).alpha(0.6).rgbString(),
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
			type: "line",
			data: {
				labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
				datasets: [{
					label: "Sales Stats",
					backgroundColor: Chart.helpers.color("#fcb12e").alpha(1).rgbString(),
					borderColor: "#fcb12e",
					pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
					pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
					pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
					pointHoverBorderColor: Chart.helpers.color("#ffffff").alpha(.1).rgbString(),
					data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15]
				}]
			},
			options: {
				title: {display: !1},
				tooltips: {
					mode: "nearest",
					intersect: !1,
					position: "nearest",
					xPadding: 10,
					yPadding: 10,
					caretPadding: 10
				},
				legend: {display: !1},
				responsive: !0,
				maintainAspectRatio: !1,
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
				elements: {line: {tension: 1e-7}, point: {radius: 4, borderWidth: 12}},
				layout: {padding: {left: 0, right: 0, top: 10, bottom: 0}}
			}
		});
	}
}

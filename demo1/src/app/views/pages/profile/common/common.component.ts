import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'kt-common',
	templateUrl: './common.component.html',
	styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

	constructor(private activateRoute: ActivatedRoute) {
	}

	ngOnInit() {
	}

}

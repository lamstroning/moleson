import { Component, OnInit } from '@angular/core';
import {SubheaderService} from '../../../../../core/_base/layout';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'kt-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss']
})
export class CatalogCardComponent implements OnInit {




	// маршурут к детальной странице связанной с id
	id: number;

	constructor(public  subheaderService: SubheaderService, private activatedRoute: ActivatedRoute) {
		this.id = activatedRoute.snapshot.params.id;
	}

  ngOnInit() {
  }

}

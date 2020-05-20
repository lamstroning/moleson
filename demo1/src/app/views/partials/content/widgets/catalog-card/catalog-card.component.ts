import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FranchisesService} from '../../../../../core/franchises';
import {Franchises} from '../../../../../core/franchises/_service/franchises.service';

@Component({
  selector: 'kt-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss']
})
export class CatalogCardComponent implements OnInit {


	franchises: Franchises[] = [];
	load = true;
	// маршурут к детальной странице связанной с id
	id: number;

	// constructor(public  subheaderService: SubheaderService, private activatedRoute: ActivatedRoute) {
	// 	this.id = activatedRoute.snapshot.params.id;
	// }
	constructor(public  franchisesService: FranchisesService, private activatedRoute: ActivatedRoute, private cdr: ChangeDetectorRef) {
		this.id = activatedRoute.snapshot.params.id;
	}
  ngOnInit() {
	  this.franchisesService.getFranchises()
		  .subscribe(result => {
			  this.franchises.push(result);
		  }, err => console.log(err),
		  () => {
		  	this.load = false;
		  	this.cdr.detectChanges();
		  }
	  );
  }

}

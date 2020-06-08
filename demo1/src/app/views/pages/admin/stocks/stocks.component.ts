import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../core/auth/_services';
import {LvlDialogComponent} from '../referal/level-edit/level-edit.component';
import {FranchisesService, FranchisesStatus, Stock} from '../../../../core/franchises/_service/franchises.service';

@Component({
  selector: 'kt-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
	name: string;
	price: string;
	stocksList: Stock[] = undefined;
	constructor(private auth: AuthService, private cdr: ChangeDetectorRef, private franchise: FranchisesService) { }
	ngOnInit() {
		this.franchise.getStocks().subscribe(res => {
			this.stocksList = res.data;
		}, err => console.log(err), () => {
			this.cdr.detectChanges();
		});
	}

	addStock() {
		const fd = new FormData();
		fd.append('name', this.name);
		fd.append('price', this.price);
		this.franchise.createStocks(fd).subscribe(res => {
			console.log(res);
			this.stocksList = res.data;
		}, err => console.log(err), () => {
			this.cdr.detectChanges();
		});
  	}
}

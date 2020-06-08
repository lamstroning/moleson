import {Component, Inject, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {currentUser} from '../../../../../core/auth';
import {Observable} from 'rxjs';
import {AppState} from '../../../../../core/reducers';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {UserResponse} from '../../../../../core/auth/_services/auth.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'kt-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
	user$: Observable<UserResponse>;

  constructor(
  		private store: Store<AppState>,
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
		this.user$ = this.store.pipe(select(currentUser));
	}
	openDialog() {
  		this.user$.subscribe(res => {
  			if (res) {
  				console.log(res);
  				const id = res.data._id;
				const dialogRef = this.dialog.open(DialogPayComponent, {
					data: {
						id
					}
				});
			}
		});
  	}

}
@Component({
	selector: 'kt-dialog-balance',
	templateUrl: './balance-dialog.component.html',
	styleUrls: ['./balance.component.scss']
})
export class DialogPayComponent {
	url: SafeUrl;
	constructor(
				public dialogRef: MatDialogRef<DialogPayComponent>,
				@Inject(MAT_DIALOG_DATA) public data: any,
				private sanitizer: DomSanitizer
			) {
		console.log(data.id);
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
			'https://moleson.payrexx.com/pay?tid=7df69168&referenceId=' + data.id + '&appview=1');
	}
}

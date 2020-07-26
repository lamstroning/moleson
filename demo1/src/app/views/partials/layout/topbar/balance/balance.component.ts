import {Component, Inject, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {currentUser, User} from '../../../../../core/auth';
import {Observable} from 'rxjs';
import {AppState} from '../../../../../core/reducers';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {UserResponse} from '../../../../../core/auth/_services/auth.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {UserService} from '../../../../../core/user';

@Component({
  selector: 'kt-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
	// user$: Observable<UserResponse>;
	user: User;
  constructor(
  		private store: Store<AppState>,
		public dialog: MatDialog,
		private userService: UserService
	) { }

	ngOnInit(): void {
  	this.user = this.userService.user;
		// this.user$ = this.store.pipe(select(currentUser));
	}
	openDialog() {
		const id = this.user._id;
		const dialogRef = this.dialog.open(DialogPayComponent, {
			data: {
				id
			}
		});

	}
	// openDialog() {
  	// 	this.user$.subscribe(res => {
  	// 		if (res) {
  	// 			console.log(res);
  	// 			const id = res.data._id;
	// 			const dialogRef = this.dialog.open(DialogPayComponent, {
	// 				data: {
	// 					id
	// 				}
	// 			});
	// 		}
	// 	});
  	// }

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

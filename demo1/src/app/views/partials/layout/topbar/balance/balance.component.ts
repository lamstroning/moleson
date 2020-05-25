import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {currentUser, User} from '../../../../../core/auth';
import {Observable} from 'rxjs';
import {AppState} from '../../../../../core/reducers';
import {MatDialog} from '@angular/material';
import {UserResponse} from '../../../../../core/auth/_services/auth.service';

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
  		const dialogRef = this.dialog.open(DialogContentExampleDialog);
	}

}
@Component({
	selector: 'kt-dialog-balance',
	templateUrl: './balance-dialog.component.html',
	styleUrls: ['./balance.component.scss']
})
export class DialogContentExampleDialog {}

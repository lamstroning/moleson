import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../../core/auth/_services';
import {currentUser, User} from '../../../core/auth';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/reducers';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {DialogData} from '../material/popups-and-modals/dialog/dialog.component';
import {from} from 'rxjs';

@Component({
  selector: 'kt-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	userList: User[];
	constructor(
		private getUsers: AuthService,
		private router: Router,
		private store: Store<AppState>,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {
  	}
	checkPermission() {
		const user = this.store.select(currentUser);
		let checkPermissions = false;
		from(user).subscribe(next => {
			if (next) {
				checkPermissions = next.data.accessLevel.permissions.length < 15;
			} else {
				this.router.navigate(['/dashboard']);
			}
		});
		console.log(checkPermissions);
	}
	// openDialog(element: HTMLElement, id: string) {
	// 	element.classList.add('active');
	// 	const window = this.dialog.open(LvlDialogComponent, {
	// 		data: {
	// 			id
	// 		}
	// 	});
	// 	window.afterClosed().subscribe(result => {
	// 		element.classList.remove('active');
	// 		console.log(`Dialog result: ${result}`);
	// 	});
	// }
 	 ngOnInit() {
		this.checkPermission();
		this.getUsers.getAllUsers().subscribe(next => {
			console.log(next.data);
			this.userList = next.data;
		}, err => console.log(err), () => {
			this.cdr.detectChanges();
		});
  	}

}
// @Component({
// 	selector: 'kt-lvl-dialog',
// 	templateUrl: 'lvl-dialog.html',
// })
// export class LvlDialogComponent implements OnInit {
// 	coefficient: string;
// 	lvlUser: string;
// 	lvlReferral: string;
// 	// constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// 	constructor(private auth: AuthService, @Inject(MAT_DIALOG_DATA) public data: any) {
// 	}
// 	send() {
// 		this.auth.editLvl(
// 			{
// 				_id: this.data.id,
// 				coefficient: +this.coefficient,
// 				lvlUser: +this.lvlUser,
// 				lvlReferral: +this.lvlReferral,
// 			}
// 		).subscribe(res => console.log(res));
// 	}
// 	ngOnInit() {
//
// 	}
// }

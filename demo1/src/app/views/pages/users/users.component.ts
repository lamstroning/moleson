import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/auth/_services';
import {currentUser, User} from '../../../core/auth';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/reducers';
import {Router} from '@angular/router';

@Component({
  selector: 'kt-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	userList: User[];
	constructor(private getUsers: AuthService, private router: Router, private store: Store<AppState>) {
  	}
	checkPermission() {
		const user = this.store.select(currentUser);
		let checkPermissions = false;
		user.subscribe(next => checkPermissions = next.data.accessLevel.permissions.length < 15);
		console.log(checkPermissions);
		if (checkPermissions) {
			this.router.navigate(['/dashboard']);
		}
	}
 	 ngOnInit() {
		this.checkPermission();
		this.getUsers.getAllUsers().subscribe(next => {
			console.log(next.data);
			this.userList = next.data;
		});
  	}

}

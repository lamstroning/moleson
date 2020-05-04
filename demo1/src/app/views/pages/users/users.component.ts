import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/auth/_services';
import {User} from '../../../core/auth';

@Component({
  selector: 'kt-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	userList: User[];
	constructor(private getUsers: AuthService) {
  	}

 	 ngOnInit() {
		this.getUsers.getAllUsers().subscribe(next => {
			console.log(next.data);
			this.userList = next.data;
		});
  	}

}

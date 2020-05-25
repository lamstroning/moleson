import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../../core/auth/_services';

@Component({
  selector: 'kt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) { }

  userList: ReferralUsers[];
  ngOnInit() {
  	this.userList = [];
  	this.auth.getReferralUsers().subscribe(res => {
  		console.log(res.data.length)
  		if (res.status === 'success' && res.data.length) {
  			for (const item of res.data) {
				const newUser = new ReferralUsers();
				newUser._id = item.link._id;
				newUser.username = item.link.username;
				newUser.email = item.link.email;
				newUser.balance = item.link.balance;
				newUser.dateCreate = new Date(item.link.dateCreate);
				this.userList.push(newUser);
			}
		} else {
			this.userList = undefined;
		}
		  console.log(this.userList);
	}, error => console.log(error), () => {
  		this.cdr.detectChanges();
	}
	);
  }
}

class ReferralUsers {
	_id: string;
	username: string;
	email: string;
	dateCreate: Date;
	balance: number;
	dateFormat() {
		return this.dateCreate.getDate() + '.' + this.dateCreate.getMonth() + '.' + this.dateCreate.getFullYear();
	}
}

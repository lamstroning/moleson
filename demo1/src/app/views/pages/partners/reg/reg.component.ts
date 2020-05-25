import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService, InviteUser} from '../../../../core/auth/_services/auth.service';
import {AuthNoticeService} from '../../../../core/auth';

@Component({
  selector: 'kt-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

	inviteUser: InviteUser;
	alerts: Alert;
	loading = false;
  constructor(private auth: AuthService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
	  // this.authNoticeService.setNotice(null);
  	this.inviteUser = {
		email: '',
		username: '',
		fullname: ''
	};
  }

  sendMail() {
  	this.loading = true;
  	this.auth.inviteUser(this.inviteUser).subscribe(() => {
		this.inviteUser = {
			email: '',
			username: '',
			fullname: ''
		};
		this.alerts = {
			message: 'Успешно отправлено',
			type: 'success'
		};
	}, err => {
		console.log(err);
		this.alerts = {
			message: 'Ошибка',
			type: 'danger'
		};
		this.loading = false;
		this.cdr.detectChanges();
	}, () => {
		this.loading = false;
		this.cdr.detectChanges();
	});
  }
}

interface Alert {
	type: string;
	message: string;
}

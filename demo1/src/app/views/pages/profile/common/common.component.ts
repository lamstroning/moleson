import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {currentUser, User} from '../../../../core/auth';
import {interval, Observable, of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../core/reducers';
@Component({
	selector: 'kt-common',
	templateUrl: './common.component.html',
	styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
	user$: Observable<User>;
	user: User;
	surname: string;
	name: string;
	middlename: string;
	format: FormatDate;
	day: number;
	month: number;
	year: number;

	avatar: string;
	passport: string;
	fullName: string;
	gender: string;
	birthday: string;
	citizenship: string;
	passportId: string;
	issued: string;
	dateIssued: string;
	departmentCode: string;
	registrationAddress: string;
	SNILS: string;
	INN: string;

	constructor(private activateRoute: ActivatedRoute, private store: Store<AppState>) {
	}
	formatDate() {
		let day = '';
		let month = '';
		this.day = this.format.day;
		this.month = this.format.month;
		this.year = this.format.year;
		if (this.day < 10) {
			day = '0';
		}
		if (this.month < 10) {
			month = '0';
		}
		this.birthday = day + this.day + '.' + month + this.month + '.' + this.year;
	}
	ngOnInit() {
		this.user$ = this.store.pipe(select(currentUser));
		this.user$.subscribe(next => console.log(next));
	}
}

interface FormatDate {
	day: number;
	month: number;
	year: number;
}

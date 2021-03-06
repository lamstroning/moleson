import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService, currentUser, User} from '../../../../core/auth';
import {interval, Observable, of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../core/reducers';
import {UserResponse} from '../../../../core/auth/_services/auth.service';
@Component({
	selector: 'kt-common',
	templateUrl: './common.component.html',
	styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
	user$: Observable<UserResponse>;
	user: User;
	startDate = {
		day: 0,
		month: 0,
		year: 0
	};
	avatar: string;
	passport: string;
	email: string;
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

	constructor(
		private activateRoute: ActivatedRoute,
		private store: Store<AppState>,
		private cdr: ChangeDetectorRef,
		private auth: AuthService
	) {}
	saveData() {
		const req: ReqServerSend = {
			avatar: this.avatar,
			passport: this.passport,
			email: this.email,
			fullName: this.fullName,
			gender: this.gender,
			birthday: this.birthday,
			citizenship: this.citizenship,
			passportId: this.passportId,
			issued: this.issued,
			dateIssued: this.dateIssued,
			departmentCode: this.departmentCode,
			registrationAddress: this.registrationAddress,
			SNILS: this.SNILS,
			INN: this.INN,
	};
		this.auth.updateUser(req).subscribe(res => console.log(res));
	}

	loadImg(img: any) {
		this.avatar = img.files[0];
		const fd = new FormData();
		fd.append('avatar', this.avatar);
		const fls = new FileReader();
		fls.readAsDataURL(img.files[0]);
		fls.addEventListener('load', () => {
			document.getElementById( 'pict-load').style.backgroundImage = 'url(' + fls.result + ')';
			this.auth.updateAvatar(fd).subscribe(
				res => console.log(res),
				err => console.log(err)
			);
		}, false);
	}
	ngOnInit() {
		this.user$ = this.store.pipe(select(currentUser));
		this.user$.subscribe(next => {
			console.log(next.data.birthday);
			this.avatar = next.data.picture === undefined ? ' ' : next.data.picture;
			this.email = next.data.email === undefined ? ' ' : next.data.email ;
			this.passportId = next.data.passportId === undefined ? ' ' : next.data.passportId ;
			this.birthday = next.data.birthday === undefined  ? ' ' : next.data.birthday ;
			this.gender = next.data.gender === undefined ? ' ' : next.data.gender ;
			this.passport = next.data.passport === undefined ? ' ' : next.data.passport ;
			this.fullName = next.data.fullName === undefined ? ' ' : next.data.fullName ;
			this.citizenship = next.data.citizenship === undefined ? ' ' : next.data.citizenship ;
			this.issued = next.data.issued === undefined ? ' ' : next.data.issued ;
			this.dateIssued = next.data.dateIssued === undefined ? ' ' : next.data.dateIssued ;
			this.departmentCode = next.data.departmentCode === undefined ? ' ' : next.data.departmentCode ;
			this.registrationAddress = next.data.registrationAddress === undefined ? ' ' : next.data.registrationAddress ;
			this.SNILS = next.data.SNILS === undefined  ? ' ' : next.data.SNILS ;
			this.INN = next.data.INN === undefined ? ' ' : next.data.INN ;
		}, err => console.log(err), () => {
			const format = this.birthday.split('.');
			this.startDate.day = +format[0];
			this.startDate.month = +format[1];
			this.startDate.year = +format[2];
			console.log('update!!');
			this.cdr.detectChanges();
		});
	}
}

interface ReqServerSend {
	avatar: any;
	passport: string;
	email: string;
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
}

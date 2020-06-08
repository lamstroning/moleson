import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AuthService, currentUser} from '../../../../core/auth';
import {AppState} from '../../../../core/reducers';

@Component({
	selector: 'kt-verification',
	templateUrl: './verification.component.html',
	styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
	dragStart = false;
	avatarImg: any = '/assets/media/icons/empty-img.svg';
	pass1Img: any = '/assets/media/icons/empty-img.svg';
	pass2Img: any = '/assets/media/icons/empty-img.svg';
	$user: any;
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
	constructor(private store: Store<AppState>, private cdr: ChangeDetectorRef, private auth: AuthService) { }

	submit() {
		const formData = new FormData();
		formData.append('avatar', this.avatarImg );
		formData.append('passport', this.pass1Img);
		formData.append('fullName', this.fullName);
		formData.append('gender', this.gender);
		formData.append('birthday', this.birthday);
		formData.append('citizenship', this.citizenship);
		formData.append('passportId', this.passportId);
		formData.append('issued', this.issued);
		formData.append('dateIssued', this.dateIssued);
		formData.append('departmentCode', this.departmentCode);
		formData.append('registrationAddress', this.registrationAddress);
		formData.append('SNILS', this.SNILS);
		formData.append('INN', this.INN);
		this.auth.updateUser(formData).subscribe(next => {
			console.log(next);
		});
	}

	ngOnInit() {
		this.$user = this.store.pipe(select(currentUser));
		setTimeout(() => this.dragAndDrop(), 2000);
	}

	addImgMini(type: number, img: any) {

			const fls = new FileReader();
			fls.readAsDataURL(img.files[0]);
			fls.addEventListener('load', () => {
				if (type === 1) {
					this.avatarImg = fls.result;
				} else if (type === 2) {
					this.pass1Img = fls.result;
				} else {
					this.pass2Img = fls.result;
				}
			}, false);

	}

	dragAndDrop() {
		// const dropArea = document.getElementById('drop-area-avatar');
		const dropArea = document.body;
		dropArea.addEventListener('dragenter', (e) => {
			console.log('dragenter');
			console.log(e);
			this.dragStart = true;
			this.cdr.detectChanges();
		}, false);
		dropArea.addEventListener('dragleave', (e) => {
			console.log('dragleave');
			console.log(e);
		}, false);
		dropArea.addEventListener('dragover', (e) => {
			// console.log('dragover');
			// console.log(e);
		}, false);
		dropArea.addEventListener('drop', (e) => {
			console.log('drop');
			console.log(e);
			this.dragStart = false;
			this.cdr.detectChanges();
		}, false);
	}
}

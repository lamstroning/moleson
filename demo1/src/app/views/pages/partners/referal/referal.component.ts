import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {AuthService, currentUser, User} from '../../../../core/auth';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../core/reducers';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'kt-referal',
  templateUrl: './referal.component.html',
  styleUrls: ['./referal.component.scss']
})
export class ReferalComponent implements OnInit {
	user$: Observable<any>;
	currentUrl = window.location.origin;
	getPart = '/';
	countTry = 0;
	refLink: string;
	constructor(private store: Store<AppState>, private auth: AuthService, private cdr: ChangeDetectorRef) { }

	ngOnInit() {
		this.user$ = this.store.pipe(select(currentUser));
		from(this.user$).subscribe(next => {
			console.log(next.data.referralLink);
			this.refLink = next.data.referralLink;
		});
	}
	generateLink() {
		const seed = new Date();
		const md5 = new Md5();
		const res = md5.appendStr(seed.toISOString().toLocaleUpperCase()).end();
		this.auth.updateRefLink(String(res).toLocaleUpperCase().substr(0, 5)).subscribe(
			next => {
				console.log('Ссылка успешно было сгенерирована');
				this.countTry = 0;
				this.refLink = next.data.referralLink;
			},
				error => {
					console.log(error);
					this.countTry++;
					if (this.countTry <= 3) {
						this.generateLink();
					} else {
						console.log('Ошибка, попробуйте позже');
					}
				},
			() => {
				console.log('генерация завершена');
				this.cdr.detectChanges();
			}
		);
	}
	copyLink() {
			const code = document.querySelector('#copy-link');
			const range = document.createRange();
			range.selectNode(code);
			window.getSelection().addRange(range);
			document.execCommand('copy');
			document.querySelector('#copy-status').innerHTML = 'Код скопирован';
			window.getSelection().removeAllRanges();
	}
}

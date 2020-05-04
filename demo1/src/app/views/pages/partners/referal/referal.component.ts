import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {currentUser, User} from '../../../../core/auth';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../core/reducers';

@Component({
  selector: 'kt-referal',
  templateUrl: './referal.component.html',
  styleUrls: ['./referal.component.scss']
})
export class ReferalComponent implements OnInit {
	user$: Observable<User>;
	currentUrl = window.location.origin;
	getPart = '/?refID=';

	constructor(private store: Store<AppState>) { }

	ngOnInit() {
		this.user$ = this.store.pipe(select(currentUser));
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


import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {currentUser, User} from '../../auth';
import {Observable} from 'rxjs';


export class UserService {
	userToken = localStorage.getItem(environment.authTokenKey);
	httpHeaders = new HttpHeaders();
	user: User;
	constructor(private store: Store<AppState>) {
		this.httpHeaders = this.httpHeaders.set('authorization', this.userToken);
		this.getUser()
	}
	getUser() {
		this.store.pipe(select(currentUser)).subscribe(res => {
			this.user = res.data;
		}, err => console.log(err), () => {
			console.log("user load");
		})
	}
	getUserBalance() {
		return this.user.balance;
	}
}


import {HttpClient, HttpHeaders} from '@angular/common/http';
import {from, Observable, of} from 'rxjs';
import {environment} from '../../../../environments/environment';

import {concatMap, filter, flatMap, map} from 'rxjs/operators';


export class FranchisesService {
	userToken = localStorage.getItem(environment.authTokenKey);
	httpHeaders = new HttpHeaders();
	constructor(private http: HttpClient) {
		this.httpHeaders = this.httpHeaders.set('authorization', this.userToken);
		this.getStatus();
		this.getFranchises();
	}
	getFranchises(): Observable<Franchises> {
		 return this.http.post<any>('/api/user/franchises/get', {key: 'all'}, {headers: this.httpHeaders}).pipe(concatMap( res => {
		 	return from<Franchises[]>(res.data);
		 })
		 );
	}
	deleteFranchise(id: string) {
		this.http.post<any>('/api/admin/franchises/delete', {_id: id}, {headers: this.httpHeaders})
			.subscribe(
				next => console.log(next),
				err => console.log(err),
			() => console.log('Франшиза удалена'));
	}
	getStatus(): Observable<FranchisesStatus> {
		 return this.http.post<any>('/api/user/franchises/status/get', {}, {headers: this.httpHeaders})
			.pipe(concatMap( res => {
					return from<FranchisesStatus[]>(res.data);
				})
			);
	}
	update(body: any) {
		this.http.post<any>('/api/user/franchises/edit', body, {headers: this.httpHeaders})
			.pipe(map(state => console.log(state.status)))
			.subscribe(next => {
				console.log(next);
			});
		this.getFranchises();
	}
	addNew(body: any) {
		this.http.post<any>('/api/user/franchises/new', body, {headers: this.httpHeaders})
			.pipe(map(state => console.log(state.status)))
			.subscribe(next => {
				console.log(next);
			});
		this.getFranchises();
	}
}

export interface FranchisesStatus {
	title: string;
	_id: string;
	description: string;
	__v: number;
}

export interface Franchises {
	money: number;
	dateCreate: number;
	investors: [];
	isEdit: boolean;
	_id: string;
	name: string;
	profitability: string;
	payback: string;
	shortDescription: string;
	detailedDescription: string;
	status: FranchisesStatus;
	picture: string;
	user: string;
	__v: number;
}


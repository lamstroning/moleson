
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

import {filter, map} from 'rxjs/operators';


export class ObjectsService {
	nextId = 0;
	franchises: Franchises[];
	isLoad: boolean;
	userToken = localStorage.getItem(environment.authTokenKey);
	httpHeaders = new HttpHeaders();
	franchisesStatus: FranchisesStatus[];
	constructor(private http: HttpClient) {
		this.isLoad = false;
		this.httpHeaders = this.httpHeaders.set('authorization', this.userToken);
		this.getStatus();
	}
	getFranchises() {
		this.http.post<any>('/api/user/franchises/get', {key: 'all'}, {headers: this.httpHeaders})
			.pipe().subscribe(result => {
			if (result.status === 'success') {
				this.franchises = result.data;
			}
		}, err => console.log(err),
			() => this.isLoad = true
		);
		console.log('updated!!!');
		return this.franchises;
	}
	// getFranchises() {
	// 	this.objects = this.http.post<FranchisesResponse>('/api/user/franchises/get', {key: 'all'}, {headers: this.httpHeaders});
	// 	this.objects.pipe(filter( state => state.status === 'success')).subscribe(result => {
	// 		this.franchises = result.data;
	// 	}, null, () => this.isLoad = true);
	// 	console.log('updated!!!');
	// 	return this.franchises;
	// }
	getStatus() {
		this.http.post<any>('/api/user/franchises/status/get', {}, {headers: this.httpHeaders})
			.pipe(filter( state => state.status === 'success')).subscribe(result => {
				console.log(result);
				this.franchisesStatus = result.data;
		}, err => console.log(err), () => this.isLoad = true);
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


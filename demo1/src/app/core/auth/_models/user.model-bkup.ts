import { BaseModel } from '../../_base/crud';
import { Address } from './address.model';
import { SocialNetworks } from './social-networks.model';
import {HttpClient} from '@angular/common/http';
import {RegUserMoleson} from './RegData.model';

export class User extends BaseModel {
	id: number;
	authorization: string;
	accessToken: string;
	refreshToken: string;
	roles: number[];
	pic: string;
	occupation: string;
	companyName: string;
	phone: string;
	address: Address;
	socialNetworks: SocialNetworks;
	http: HttpClient;
	data: UserMoleson;
	regDate: RegUserMoleson;
	clear(): void {
		this.id = undefined;
		this.regDate = new RegUserMoleson();
		this.regDate.clear();
		this.roles = [];
		this.authorization = 'access-token-' + Math.random();
		this.accessToken = '';
		this.refreshToken = 'access-token-' + Math.random();
		this.pic = './assets/media/users/default.jpg';
		this.occupation = '';
		this.companyName = '';
		this.phone = '';
		this.address = new Address();
		this.address.clear();
		this.socialNetworks = new SocialNetworks();
		this.socialNetworks.clear();
	}
}

interface UserMoleson {
	isVerifiedMail: boolean;
	dateCreate: number;
	accessLevel: [
		{permissions: [
				{_id: string,
					lvl: 0,
					path: 'string',
					description: string,
					is: boolean,
					__v: number}
			]},
	];
	isVerified: boolean;
	balance: number;
	expectsWithdrawal: number;
	isInstallmentPlan: boolean;
	amountOfPurchases: number;
	shoppingInStructure: number;
	level: number;
	_id: string;
	email: string;
	username: string;
	hash: string;
	accessToken: string;
	urlMailConfirmation: string;
	__v: string;
}

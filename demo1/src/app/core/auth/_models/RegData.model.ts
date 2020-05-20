export class RegUserMoleson {
	username: string;
	password: string;
	email: string;
	fullname: string;
	referral: string;

	clear() {
		this.username = '';
		this.password = '';
		this.email = '';
		this.fullname = '';
		this.referral = '';
	}
}

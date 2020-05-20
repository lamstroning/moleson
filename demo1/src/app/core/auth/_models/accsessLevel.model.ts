export class AccessLevel {
	_id: string;
	lvl: number;
	description: string;
	permissions: any;
	clear() {
		this._id = '';
		this.description = '';
		this.lvl = 0;
		this.permissions = [{}];
	}
}

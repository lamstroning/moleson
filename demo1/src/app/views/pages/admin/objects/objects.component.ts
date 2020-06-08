import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FranchisesService} from '../../../../core/franchises';
import {Franchises, FranchisesStatus, Stock} from '../../../../core/franchises/_service/franchises.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../core/reducers';
import {HttpClient} from '@angular/common/http';


@Component({
	selector: 'kt-objects',
	templateUrl: './objects.component.html',
	styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {
	filter: string;
	result: Franchises[];
	status: FranchisesStatus[] = [];
	loading = true;
	constructor(
		public dialog: MatDialog,
		private ObjService: FranchisesService,
		private router: Router,
		private store: Store<AppState>,
		private cdr: ChangeDetectorRef
	) {

	}
	removeFranchise(id: string) {
		this.ObjService.deleteFranchise(id);
		this.getFranchise();
	}
	openDialog(data: Franchises, mode: boolean): void {
		const dialogRef = this.dialog.open(DialogAddComponent, {
			width: '50vw',
			minWidth: '300px',
			height: '80vh',
			data: {
				mode,
				data
			}
		});
		dialogRef.afterClosed().subscribe(() => {
			console.log('good');
			this.getFranchise();
		});
	}

	switchState(state: string, element: HTMLElement) {
		const btns: any = document.getElementsByClassName('category-btn');
		for (const btn of btns) {
			btn.style.backgroundColor = 'transparent';
		}
		if (state === this.filter) {
			this.filter = undefined;
		} else {
			if (element === undefined) {
				return ;
			}
			element.style.backgroundColor = '#fcb12e';
			this.filter = state;
		}
	}
	getFranchise() {
		this.loading = true;
		if (this.result === undefined || this.result.length !== 0) {
			this.result = [];
		}
		this.ObjService.getFranchises().subscribe(res => {
			this.result.push(res);
		}, err => console.log(err), () => {
			this.loading = false;
			this.cdr.detectChanges();
		});
	}
	getFranchiseStatus() {
		this.ObjService.getStatus().subscribe(res => {
			this.status.push(res);
			this.cdr.detectChanges();
		});
	}
	ngOnInit() {
		this.getFranchise();
		this.getFranchiseStatus();
	}
}

@Component({
	selector: 'kt-dialog',
	styleUrls: ['dialogAdd.component.scss'],
	templateUrl: 'dialogAdd.html',
})

export class DialogAddComponent {
	newState: string;
	newName: string;
	profitability: string;
	payback: string;
	shortDescription: string;
	detailedDescription: string;
	picture: File;
	editMode: boolean;
	urlImg: string;
	fileName: string;
	fileType: string;
	stock: string;
	stockList: Stock[] = [];
	stateList: FranchisesStatus[] = [];
	stocksCount = 1;
	_id: string;
	constructor(public dialogRef: MatDialogRef<DialogAddComponent>,
						       @Inject(MAT_DIALOG_DATA) public data: any, private serv: FranchisesService, private http: HttpClient) {
		this.urlImg = '/assets/media/icons/empty-img.svg';
		serv.getStatus().subscribe(res => {
			this.stateList.push(res);
		});
		serv.getStocks().subscribe(res => {
			this.stockList.push(res);
		});


		if (data.mode) {
			this.urlImg = data.data.picture;
			this.newState = data.data.status._id;
			this.stock = data.data.stock;
			this.newName = data.data.name;
			this.profitability = data.data.profitability;
			this.payback = data.data.payback;
			this.shortDescription = data.data.shortDescription;
			this.detailedDescription = data.data.detailedDescription;
			this._id = data.data._id;
			this.stocksCount = data.data.stocks;
			this.stock = data.data.stock;
			// this.picture = data.data.picture;
			this.editMode = data.data.editMode;
			this.loadImg();
			// this.picture = fetch(data.data.picture).then(res => res.blob()).then(blob => img.src = URL.createObjectURL(blob));
		}
	}
	changeCount(count) {
		this.stocksCount += count;
		if (this.stocksCount < 1) {
			this.stocksCount = 1;
		}
	}
	collectionData() {
		const fd = new FormData();
		fd.append('name', this.newName);
		fd.append('status', this.newState);
		fd.append('profitability', this.profitability);
		fd.append('payback', this.payback);
		fd.append('shortDescription', this.shortDescription);
		fd.append('detailedDescription', this.detailedDescription);
		fd.append('picture', this.picture, this.picture.name);
		fd.append('stock', this.stock);
		fd.append('stocks', this.stocksCount + '');
		if (this.data.mode) {
			fd.append('_id', this._id);
		}
		return fd;
	}
	edit() {
		this.serv.update(this.collectionData());
		this.dialogRef.close();
	}
	addNew() {
		this.serv.addNew(this.collectionData());
		this.dialogRef.close();
	}
	loadImg() {
		const img = new Image();
		img.src = 'http://maxim.fvds.ru' + this.data.data.picture.substr(1);
		this.getFileNameFromURL(img.src);
		console.log(img.src);
		const canvas = document.createElement('canvas');
		canvas.width = 200;
		canvas.height = 300;
		const context = canvas.getContext('2d');
		context.drawImage(img, 0, 0);

		canvas.toBlob(blob => {
			console.log(blob);
			this.picture = new File([blob], this.fileName, {
				type: 'text/' + this.fileType
			});
			console.log(this.picture);
		}, 'image/' + this.fileType);
	}
	getFileNameFromURL(url: string) {
		const posUrl: number = url.lastIndexOf('/');
		if (posUrl === -1) {
			return (url);
		}
		this.fileName = url.substr(posUrl + 1);
		const pos: number = this.fileName.lastIndexOf('.');
		if (pos === -1) {
			return ;
		}
		this.fileType = this.fileName.substr(pos + 1);
		if (this.fileType === 'jpg') {
			this.fileType = 'jpeg';
			console.log('image/' + this.fileType);
		}
	}
	addImage(img: any) {
		this.picture = img.files[0];
		console.log(this.picture);
		const fls = new FileReader();
		fls.readAsDataURL(img.files[0]);
		fls.addEventListener('load', () => {
			document.getElementById('imgs').style.backgroundImage = 'url(' + fls.result + ')';
			}, false);
	}
}

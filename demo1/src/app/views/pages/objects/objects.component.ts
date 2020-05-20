import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FranchisesService} from '../../../core/franchises';
import {Franchises, FranchisesStatus} from '../../../core/franchises/_service/franchises.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/reducers';
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
	constructor(public dialog: MatDialog,
				         private ObjService: FranchisesService,
				         private router: Router,
				         private store: Store<AppState>,
				         private cdr: ChangeDetectorRef) {

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
	money: string;
	profitability: string;
	payback: string;
	shortDescription: string;
	detailedDescription: string;
	picture: File;
	editMode: boolean;
	urlImg: string;

	stateList: FranchisesStatus[] = [];
	constructor(public dialogRef: MatDialogRef<DialogAddComponent>,
						       @Inject(MAT_DIALOG_DATA) public data: any, private serv: FranchisesService, private http: HttpClient) {
		this.urlImg = '/assets/media/icons/empty-img.svg';
		serv.getStatus().subscribe(res => {
			this.stateList.push(res);
		});
// 		const Img = new Image();
// 		if (data.data !== undefined) {
// 			const xhr = new XMLHttpRequest();
//
// // Use JSFiddle logo as a sample image to avoid complicating
// // this example with cross-domain issues.
// 			xhr.open( 'GET', 'https://fiddle.jshell.net/img/logo.png', true );
//
// // Ask for the result as an ArrayBuffer.
// 			xhr.responseType = 'blob';
//
// 			xhr.onload = function( ) {
// 				const blob = this.response;
// 				const reader = new FileReader();
// 				reader.onload = () => {
// 					document.getElementById('imgs').src = reader.result;
// 				};
// 				reader.readAsDataURL(blob);
// 			};
//
// 			xhr.send();
// 		}

		if (data.mode) {
			this.urlImg = data.data.picture;
			this.newState = data.data.status._id;
			this.newName = data.data.name;
			this.money = data.data.money;
			this.profitability = data.data.profitability;
			this.payback = data.data.payback;
			this.shortDescription = data.data.shortDescription;
			this.detailedDescription = data.data.detailedDescription;
			this.picture = data.data.picture;
			this.editMode = data.data.editMode;
		}
	}

	collectionData() {
		const fd = new FormData();
		fd.append('name', this.newName);
		fd.append('status', this.newState);
		fd.append('money', this.money);
		fd.append('profitability', this.profitability);
		fd.append('payback', this.payback);
		fd.append('shortDescription', this.shortDescription);
		fd.append('detailedDescription', this.detailedDescription);
		fd.append('picture', this.picture, this.picture.name);
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
	addImage(img: any) {
		this.picture = img.files[0];
		const fls = new FileReader();
		fls.readAsDataURL(img.files[0]);
		fls.addEventListener('load', () => {
			document.getElementById('imgs').style.backgroundImage = 'url(' + fls.result + ')';
			}, false);
	}
}

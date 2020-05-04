import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Franchises, ObjectsService} from './objects.service';

@Component({
	selector: 'kt-objects',
	templateUrl: './objects.component.html',
	styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {
	filter: string;
	result: Franchises[];
	constructor(public dialog: MatDialog, private ObjService: ObjectsService) {
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
		dialogRef.afterClosed().subscribe(result => {
			console.log('good');
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
	ngOnInit() {
		this.ObjService.getFranchises();
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
	constructor(public dialogRef: MatDialogRef<DialogAddComponent>,
						       @Inject(MAT_DIALOG_DATA) public data: any, private serv: ObjectsService) {
		this.urlImg = '/assets/media/icons/empty-img.svg';
		const fs = new FileReader();
		const Img = new Image();
		Img.src = data.data.picture;

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
			// console.log(fs.readAsDataURL(data.data.picture));
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
			// this.picture = fls.result;
			}, false);
	}
}

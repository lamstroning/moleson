import {Component, Inject, Injectable, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ObjectsService, Objects} from './objects.service';


@Component({
  selector: 'kt-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {
	filter: string;

	constructor(public dialog: MatDialog, private ObjService: ObjectsService) {
	}

  openDialog(): void {
  	const dialogRef = this.dialog.open(DialogAddComponent, {
  		width: '50vw',
		minWidth: '300px',
		height: '80vh',
		data: {name: '', state: ''}
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
	constructor(public dialogRef: MatDialogRef<DialogAddComponent>,
						       @Inject(MAT_DIALOG_DATA) public data: number, private serv: ObjectsService) {
	}
	addNew() {
		this.serv.addNew(this.newName, this.newState);
		this.dialogRef.close();
	}

	addImage(img: any) {
		const fls = new FileReader();
		fls.readAsDataURL(img.files[0]);
		fls.addEventListener('load', () => {
			document.getElementById('imgs').style.backgroundImage = 'url(' + fls.result + ')';
			}, false);
	}
}

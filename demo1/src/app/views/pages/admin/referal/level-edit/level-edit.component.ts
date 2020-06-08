import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {AuthService, EditLvl} from '../../../../../core/auth/_services/auth.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {DialogAddComponent} from '../../objects/objects.component';
import {updateLocale} from 'moment';

@Component({
  selector: 'kt-level-edit',
  templateUrl: './level-edit.component.html',
  styleUrls: ['./level-edit.component.scss']
})
export class LevelEditComponent implements OnInit {
	lvl: EditLvl[] = [];
  	constructor(private auth: AuthService, public dialog: MatDialog, private cdr: ChangeDetectorRef) { }
	openDialog(element: HTMLElement, id: string, title: string) {
		element.classList.add('active');
		const window = this.dialog.open(LvlDialogComponent, {
			data: {
				id,
				title
			}
		});
		window.afterClosed().subscribe(result => {
			element.classList.remove('active');
			console.log(`Dialog result: ${result}`);
			this.updateLvlList();
			this.cdr.detectChanges();
		});
	}
	remove(id: string) {
		this.auth.removeLvl(id).subscribe(res => {
				console.log(res);
			}, err => console.log(err), () => {
			this.updateLvlList();
		});
	}
	updateLvlList() {
		this.lvl = [];
		this.auth.getLvl().subscribe(res => {
			if (res) {
				for (const edit of res.data) {
					this.lvl.push(edit);
				}
			}
		}, err => console.log(err), () => {
			console.log(this.lvl);
			this.cdr.detectChanges();
		});
	}
  ngOnInit() {
	  this.updateLvlList();
  }
	getLevel(lvlId: number) {
  		if (lvlId === 1) {
			return ('Агент');
		} else if (lvlId === 2) {
			return ('Инвест-агент');
		} else if (lvlId === 3) {
			return ('Инвест-брокер');
		}
	}
}
@Component({
	selector: 'kt-lvl-dialog',
	styleUrls: ['./level-edit.component.scss'],
	templateUrl: 'lvl-dialog.html',
})
export class LvlDialogComponent implements OnInit {
	coefficient: string;
	lvlUser: string;
	lvlReferral: string;
	selectUsersLvl = [
		{value: 1, viewValue: 'Агент'},
		{value: 2, viewValue: 'Инвест-агент'},
		{value: 3, viewValue: 'Инвест-брокер'}
	];
	// constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
	constructor(
		public dialogRef: MatDialogRef<DialogAddComponent>,
		private auth: AuthService,
		@Inject(MAT_DIALOG_DATA) public data: any) {
	}
	send() {
		if (this.data.id === undefined) {
			this.auth.addLvl(
				{
					_id: '',
					coefficient: +this.coefficient,
					lvlUser: +this.lvlUser,
					lvlReferral: +this.lvlReferral,
				}
			).subscribe(res => console.log(res));
		} else {
			this.auth.editLvl(
				{
					_id: this.data.id,
					coefficient: +this.coefficient,
					lvlUser: +this.lvlUser,
					lvlReferral: +this.lvlReferral,
				}
			).subscribe(res => console.log(res));
		}
		this.dialogRef.close();
	}
	ngOnInit() {

	}
}

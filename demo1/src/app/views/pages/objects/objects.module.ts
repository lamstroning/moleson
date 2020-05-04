// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import {DialogAddComponent, ObjectsComponent} from './objects.component';
import {FormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {Franchises, ObjectsService} from './objects.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ObjectsComponent
			},
		]),
		FormsModule,
		MatDialogModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
	],
	providers: [
		{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
		{ provide: MAT_DIALOG_DATA, useValue: {data: undefined}},
		ObjectsService
	],
	entryComponents: [DialogAddComponent],
	declarations: [
		DialogAddComponent,
		ObjectsComponent
	]
})
export class ObjectsModule {
}

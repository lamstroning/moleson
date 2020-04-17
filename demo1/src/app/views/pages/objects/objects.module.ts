// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import {DialogAddComponent, ObjectsComponent} from './objects.component';
import {FormsModule} from '@angular/forms';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {ObjectsService} from './objects.service';


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
	],
	providers: [
		{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
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

import {UsersComponent} from './users.component';
import {NgModule} from '@angular/core'
import {PartialsModule} from '../../../partials/partials.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
	imports: [
		PartialsModule,
		CommonModule,
		MatDialogModule,
		RouterModule.forChild([
			{
				path: '',
				component: UsersComponent
			}
		]),
		MatProgressSpinnerModule,
		FormsModule
	],
	providers: [
		{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
	],
	declarations: [
		UsersComponent
	]
})

export class UsersModule {

}

import {UsersComponent} from './users.component';
import {NgModule} from '@angular/core'
import {PartialsModule} from '../../partials/partials.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
	imports: [
		PartialsModule,
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: UsersComponent
			}
		]),
		MatProgressSpinnerModule
	],
	declarations: [
		UsersComponent
	]
})

export class UsersModule {

}

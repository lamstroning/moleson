import {UsersComponent} from './users.component';
import {NgModule} from '@angular/core'
import {PartialsModule} from '../../partials/partials.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
	imports: [
		PartialsModule,
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: UsersComponent
			}
		])
	],
	declarations: [
		UsersComponent
	]
})

export class UsersModule {

}

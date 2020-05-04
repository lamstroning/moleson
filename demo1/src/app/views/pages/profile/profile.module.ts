// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import {ProfileComponent} from './profile.component';
import {CommonComponent} from './common/common.component';
import {VerificationComponent} from './verification/verification.component';
import {SettingsComponent} from './settings/settings.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
	imports: [
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProfileComponent,
				children: [
					{
						path: 'common',
						component: CommonComponent
					},
					{
						path: 'verification',
						component: VerificationComponent
					},
					{
						path: 'settings',
						component: SettingsComponent
					},
				]
			},
		]),
		CommonModule,
		FormsModule,
		NgbDatepickerModule,

	],
	providers: [],
	declarations: [
		ProfileComponent,
		CommonComponent,
		SettingsComponent,
		VerificationComponent
	]
})
export class ProfileModule {
}

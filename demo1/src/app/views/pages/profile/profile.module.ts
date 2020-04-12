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

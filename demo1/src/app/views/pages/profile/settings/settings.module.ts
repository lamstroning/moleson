// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Core Module
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from './settings.component';

@NgModule({
	imports: [
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: SettingsComponent,

			},
		]),
		NgbCarouselModule,
	],
	providers: [],
	exports: [
		SettingsComponent
	],
	declarations: [
		SettingsComponent
	]
})
export class SettingsModule {
}

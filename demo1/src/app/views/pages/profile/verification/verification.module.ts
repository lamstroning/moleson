// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Core Module
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { VerificationComponent } from './verification.component';

@NgModule({
	imports: [
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: VerificationComponent,

			},
		]),
		NgbCarouselModule,
	],
	providers: [],
	declarations: [
		VerificationComponent
	]
})
export class VerificationModule {
}

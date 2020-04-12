// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Core Module
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonComponent } from './common.component';

@NgModule({
	imports: [
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: CommonComponent,

			},
		]),
		NgbCarouselModule,
	],
	providers: [],
	exports: [
		CommonComponent
	],
	declarations: [
		CommonComponent
	]
})
export class CommonModule {
}

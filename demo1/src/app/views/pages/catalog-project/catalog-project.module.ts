// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import {CatalogProjectComponent} from './catalog-project.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: CatalogProjectComponent
			},
		]),
	],
	providers: [],
	declarations: [
		CatalogProjectComponent,
	]
})
export class CatalogProjectModule {
}

// Angular
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import {CatalogCardDetailComponent} from './catalog-card-detail.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FranchisesService} from '../../../core/franchises';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: CatalogCardDetailComponent,
			},
		]),
		InlineSVGModule,
		MatSliderModule,
		FormsModule,
		MatButtonModule,
		MatCheckboxModule,
	],
	providers: [ FranchisesService],
	declarations: [
		CatalogCardDetailComponent,
	],
})
export class CatalogCardDetailModule {

}

// Angular
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import {CatalogCardDetailComponent, FirstDialog} from "./catalog-card-detail.component";
import {InlineSVGModule} from "ng-inline-svg";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		MatDialogModule,
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
	providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
	declarations: [
		CatalogCardDetailComponent,
		FirstDialog
	],
	entryComponents: [
		FirstDialog
	]
})
export class CatalogCardDetailModule {

}

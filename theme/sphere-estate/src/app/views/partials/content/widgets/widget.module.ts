import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, } from '@angular/material';
import { CoreModule } from '../../../../core/core.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// Datatable
import { DataTableComponent } from './general/data-table/data-table.component';
// General widgets
import { Widget1Component } from './widget1/widget1.component';
import { Widget4Component } from './widget4/widget4.component';
import { Widget5Component } from './widget5/widget5.component';
import { Widget12Component } from './widget12/widget12.component';
import { Widget14Component } from './widget14/widget14.component';
import { Widget26Component } from './widget26/widget26.component';
import { Timeline2Component } from './timeline2/timeline2.component';
import { CustomWidgetComponent } from './custom-widget/custom-widget.component';
import { CustomWidget2Component } from './custom-widget2/custom-widget2.component';
import { CustomWidget3Component } from './custom-widget3/custom-widget3.component';
import { CatalogCardComponent } from './catalog-card/catalog-card.component';
import {RouterModule} from "@angular/router";
import {MatSliderModule} from "@angular/material/slider";
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';

@NgModule({
	declarations: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,
		CustomWidgetComponent,
		CustomWidget2Component,
		CustomWidget3Component,
		CatalogCardComponent,
		CustomCheckboxComponent,
	],
	exports: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,
		CustomWidgetComponent,
		CustomWidget2Component,
		CustomWidget3Component,
		CatalogCardComponent,
	],
	imports: [
		CommonModule,
		PerfectScrollbarModule,
		MatTableModule,
		CoreModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		MatSortModule,
		RouterModule,
		MatSliderModule,
	]
})
export class WidgetModule {
}

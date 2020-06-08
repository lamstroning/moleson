// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {StocksComponent} from './stocks.component';
import {CoreModule} from '../../../../core/core.module';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material';
import {CommonModule} from '@angular/common';
// Core Module




@NgModule({
	imports: [
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: StocksComponent,
				children: [
					{
						path: 'stocks',
						component: StocksComponent,
					}
				]
			},
		]),
		FormsModule,
		MatProgressSpinnerModule,
		CommonModule,

	],
	declarations: [
		StocksComponent
	],

})
export class StocksModule {
}

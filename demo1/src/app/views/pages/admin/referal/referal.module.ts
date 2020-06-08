// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Core Module
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import {ReferalComponent} from './referal.component';
import {PayComponent} from './pay/pay.component';
import {ReqComponent} from './pay/req/req.component';
import {StateComponent} from './pay/state/state.component';
import {MainRefComponent} from './main-ref/main-ref.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LevelEditComponent, LvlDialogComponent} from './level-edit/level-edit.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatFormFieldModule, MatProgressSpinnerModule, MatSelectModule} from '@angular/material';



@NgModule({
	imports: [
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ReferalComponent,
				children: [
					{
						path: 'pay',
						component: PayComponent,
						children: [
							{
								path: 'req',
								component: ReqComponent,
							},
							{
								path: 'state',
								component: StateComponent,
							},
						]
					},
					{
						path: 'main',
						component: MainRefComponent
					},
					{
						path: 'lvl',
						component: LevelEditComponent,
					},
				]
			},
		]),
		MatCheckboxModule,
		CommonModule,
		FormsModule,
		MatProgressSpinnerModule,
		MatSelectModule,

	],
	entryComponents: [
		LvlDialogComponent
	],
	declarations: [
		LvlDialogComponent,
		ReferalComponent,
		LevelEditComponent,
		PayComponent,
		ReqComponent,
		StateComponent,
		MainRefComponent
	],
	providers: [
		{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
	]
})
export class ReferalModule {
}

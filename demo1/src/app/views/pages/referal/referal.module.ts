// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import {ReferalComponent} from './referal.component';
import {PayComponent} from './pay/pay.component';
import {ReqComponent} from './pay/req/req.component';
import {LvlComponent} from './lvl/lvl.component';
import {StateComponent} from './pay/state/state.component';
import {MainRefComponent} from './main-ref/main-ref.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


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
						path: 'lvl',
						component: LvlComponent
					},
					{
						path: 'main',
						component: MainRefComponent
					},
				]
			},
		]),
		MatCheckboxModule,
		CommonModule,
		FormsModule,

	],
	declarations: [
		ReferalComponent,
		LvlComponent,
		PayComponent,
		ReqComponent,
		StateComponent,
		MainRefComponent
	]
})
export class ReferalModule {
}

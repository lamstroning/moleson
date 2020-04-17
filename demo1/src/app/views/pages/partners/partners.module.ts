import {NgModule} from '@angular/core';
import {CoreModule} from '../../../core/core.module';
import {RouterModule} from '@angular/router';
import {StructComponent} from './struct/struct.component';
import {PartnersComponent} from './partners.component';
import {PartialsModule} from '../../partials/partials.module';
import {RegComponent} from './reg/reg.component';
import {CountComponent} from './count/count.component';

import {PayedComponent} from './payed/payed.component';
import {GraphComponent} from './struct/graph/graph.component';
import {StateComponent} from './struct/state/state.component';
import {MainComponent} from './struct/main/main.component';
import {AllocationsComponent} from './count/allocations/allocations.component';
import {ConclusionComponent} from './count/conclusion/conclusion.component';
import {TransactionComponent} from './count/transaction/transaction.component';
import {WaysComponent} from './count/ways/ways.component';

import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
	imports: [
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: PartnersComponent,
				children: [
					{
						path: 'struct',
						component: StructComponent,
						children: [
							{
								path: 'main',
								component: MainComponent
							},
							{
								path: 'state',
								component: StateComponent
							},
							{
								path: 'graph',
								component: GraphComponent
							}

						]
					},
					{
						path: 'reg',
						component: RegComponent
					},
					{
						path: 'count',
						component: CountComponent,
						children: [
							{
								path: 'allocations',
								component: AllocationsComponent
							},
							{
								path: 'conclusion',
								component: ConclusionComponent
							},
							{
								path: 'transition',
								component: TransactionComponent
							},
							{
								path: 'ways',
								component: WaysComponent
							}
						]
					},

					{
						path: 'payed',
						component: PayedComponent
					}

				]
			},
		]),
		CommonModule,
		MatCheckboxModule,

	],
	providers: [],
	declarations: [
		PartnersComponent,
		GraphComponent,
		StateComponent,
		MainComponent,
		RegComponent,
		StructComponent,
		CountComponent,
		PayedComponent,
		AllocationsComponent,
		ConclusionComponent,
		TransactionComponent,
		WaysComponent,

	]
})
export class PartnersModule {
}

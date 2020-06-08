// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { MyPageComponent } from './my-page/my-page.component';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule, MatProgressSpinnerModule, MatSelectModule} from '@angular/material';


@NgModule({
	exports: [],
	declarations: [MyPageComponent],

	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,
		RouterModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		MatSelectModule,
		ReactiveFormsModule
	],

})
export class PagesModule {
}

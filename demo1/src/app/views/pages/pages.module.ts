// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import {LevelEditComponent, LvlDialogComponent} from './admin/level-edit/level-edit.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
	declarations: [MyPageComponent, LevelEditComponent, LvlDialogComponent],
	exports: [],
	entryComponents: [
		LvlDialogComponent
	],
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
		MatProgressSpinnerModule
	],
	providers: [
		{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
		]
})
export class PagesModule {
}

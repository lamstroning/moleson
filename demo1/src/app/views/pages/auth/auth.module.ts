// Angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// Material
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// Translate
import { TranslateModule } from '@ngx-translate/core';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// CRUD
import { InterceptService } from '../../../core/_base/crud/';
// Module components
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthNoticeComponent } from './auth-notice/auth-notice.component';
// Auth
import { AuthEffects, AuthGuard, authReducer, AuthService } from '../../../core/auth';
import { TypeAccountComponent } from './register/typeAccount/type-account/type-account.component';
import { PersonAccountComponent } from './register/typeAccount/person-account/person-account.component';
import { CompanyAccountComponent } from './register/typeAccount/company-account/company-account.component';
import { CodeComponent } from './register/typeAccount/code/code.component';
import { WelcomeComponent } from './register/welcome/welcome.component';
import { VerificationComponent } from './register/verification/verification.component';
import {MatRadioModule} from "@angular/material/radio";

const routes: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			},
			{
				path: 'login',
				component: LoginComponent,
				data: {returnUrl: window.location.pathname}
			},
			{
				path: 'register',
				component: RegisterComponent
			},
			{
				path: 'forgot-password',
				component: ForgotPasswordComponent,
			},
			{
				path: 'register/typeAccount/type-account',
				component: TypeAccountComponent,
			},
			{
				path: 'register/typeAccount/person-account',
				component: PersonAccountComponent,
			},
			{
				path: 'register/typeAccount/company-account',
				component: CompanyAccountComponent,
			},
			{
				path: 'register/typeAccount/code',
				component: CodeComponent,
			},
			{
				path: 'register/verification',
				component: VerificationComponent,
			},
			{
				path: 'register/welcome',
				component: WelcomeComponent,
			},
		]
	}
];


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		RouterModule.forChild(routes),
		MatInputModule,
		MatFormFieldModule,
		MatCheckboxModule,
		TranslateModule.forChild(),
		StoreModule.forFeature('auth', authReducer),
		EffectsModule.forFeature([AuthEffects]),
		MatRadioModule
	],
	providers: [
		InterceptService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptService,
			multi: true
		},
	],
	exports: [AuthComponent, VerificationComponent],
	declarations: [
		AuthComponent,
		LoginComponent,
		RegisterComponent,
		ForgotPasswordComponent,
		AuthNoticeComponent,
		TypeAccountComponent,
		PersonAccountComponent,
		CompanyAccountComponent,
		CodeComponent,
		WelcomeComponent,
		VerificationComponent
	]
})

export class AuthModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AuthModule,
			providers: [
				AuthService,
				AuthGuard
			]
		};
	}
}

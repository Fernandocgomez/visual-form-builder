import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './lib.routes';
import { LoginComponent } from './login.component';
import { LoginDataAccessModule } from '@xreats/login-access-data';
import { UiNavigationModule } from '@xreats/ui/navigation';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '@xreats/ui/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormFactoryService } from './services/login-form-factory.service';

@NgModule({
  imports: [
  CommonModule,
    RouterModule.forChild(loginRoutes),
    LoginDataAccessModule,
    UiNavigationModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, LoginFormComponent],
  providers: [
    LoginFormFactoryService
  ]
})
export class LoginModule {}

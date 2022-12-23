import { Component, OnInit } from '@angular/core';
import { LoginFacade } from '@xreats/login-access-data';

@Component({
  selector: 'feature-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private readonly loginFacade: LoginFacade) {}
  
  ngOnInit(): void {
    this.loginFacade.dispatchAuthUserAction();
  }
}

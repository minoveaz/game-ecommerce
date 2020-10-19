import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { basicAlert } from '@shared/alerts/toasts';
import { TYPE_ALERT } from '@shared/alerts/values.config';
import { ILoginForm, IResultLogin } from '@core/interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: ILoginForm = {
    email: '',
    password: ''
  };

  constructor( private auth: AuthService) { }


  init(){
    console.log(this.login);
    this.auth.login(this.login.email, this.login.password).subscribe(
      (result: IResultLogin) => {
        console.log(result);
        if (result.status ){
          if (result.token !== null){
            basicAlert(TYPE_ALERT.SUCCESS, result.message);
            this.auth.setSession(result.token);
            this.auth.updateSession(result);
            return;
          }
          basicAlert(TYPE_ALERT.ERROR, result.message);
          return;
        }
        basicAlert(TYPE_ALERT.INFO, result.message);
      }
    );
  }

}

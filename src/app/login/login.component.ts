import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import { TranslateService} from '../services/translate.service';
import data from '../../assets/i18n/login.json'
import data_2 from '../../../src/assets/i18n/menu/title.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo?: AuthLoginInfo;
 
  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService,
      public translateservice: TranslateService,
      private router: Router) { }
  text = data;
  text_2 = data_2

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }
  onSubmit() {
    console.log('test this form');
    console.log(this.form);
  
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);
  
    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        console.log('1111111111');
        console.log(data);
        console.log(data.token);
        console.log(data.username);
        console.log(data.roles);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.roles);
  
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.router.navigate(['/main']); // перенаправляем на страницу /main
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  
}  
 
//   onSubmit() {
//     console.log('test this form');
//     console.log(this.form);
 
//     this.loginInfo = new AuthLoginInfo(
//       this.form.username,
//       this.form.password);
 
//     this.authService.attemptAuth(this.loginInfo).subscribe(
//       data => {
//         console.log('1111111111');
//         console.log(data);
//         console.log(data.token);
//         console.log(data.username);
//         console.log(data.roles);
//         this.tokenStorage.saveToken(data.token);
//         this.tokenStorage.saveUsername(data.username);
//         this.tokenStorage.saveAuthorities(data.roles);
 
//         this.isLoginFailed = false;
//         this.isLoggedIn = true;
//         this.roles = this.tokenStorage.getAuthorities();
//         this.reloadPage();
//         this.router.navigate(['/user']); 
//       },
//       error => {
//         console.log(error);
//         this.errorMessage = error.error.message;
//         this.isLoginFailed = true;
//       }
//     );
//   }
 
//   reloadPage() {
//     window.location.reload();
//   }

// }

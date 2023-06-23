// import { Component, OnInit } from '@angular/core';

// import { AuthService } from '../auth/auth.service';
// import { SignupInfo } from '../auth/signup-info';
// import { TranslateService} from '../services/translate.service';
// import registration from '../../assets/i18n/registration.json'

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   form: any = {};
//   signupInfo?: SignupInfo;
//   isSignedUp = false;
//   isSignUpFailed = false;
//   errorMessage = '';

//   constructor(private authService: AuthService, public translateservice: TranslateService) { }
//   text = registration;
  
//   ngOnInit() { }

//   onSubmit() {
//     console.log(this.form);

//     this.signupInfo = new SignupInfo(
//       this.form.name,
//       this.form.username,
//       this.form.email,
//       this.form.password);

//     this.authService.signUp(this.signupInfo).subscribe(
//       data => {
//         console.log(data);
//         this.isSignedUp = true;
//         this.isSignUpFailed = false;
//       },
//       error => {
//         console.log(error);
//         this.errorMessage = error.error.message;
//         this.isSignUpFailed = true;
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SignupInfo } from '../auth/signup-info';
import { TranslateService } from '../services/translate.service';
import registration from '../../assets/i18n/registration.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo?: SignupInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, public translateservice: TranslateService) {}

  text = registration;

  ngOnInit() {}

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignupInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'An unexpected error occurred.';
        }
        this.isSignUpFailed = true;
      }
    );
  }
}

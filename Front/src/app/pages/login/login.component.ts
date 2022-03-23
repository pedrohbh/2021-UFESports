import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private sparkqlData = null;
  loginForm: FormGroup;
  
    constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookieService: CookieService) {}
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })

    
  }

  async onSubmit() {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    const form = this.loginForm.value;

    const login = {
      email: form.email,
      password: form.password
    }

    try {
      const responseLogin = await this.authService.login(login);
      this.preencheCookies(responseLogin);
      this.router.navigate(['events']);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }
  

  preencheCookies(responseLogin){
    this.cookieService.deleteAll();
    this.cookieService.set('userId', responseLogin.userId);
    this.cookieService.set('studentId', responseLogin.studentId);
    this.cookieService.set('email', responseLogin.email);
    this.cookieService.set('admin', responseLogin.admin);
    this.cookieService.set('token', responseLogin.token);
  }
}

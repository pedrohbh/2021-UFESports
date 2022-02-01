import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

class CustomValidators {
  static passwordContainsNumber(control: AbstractControl): ValidationErrors {
    const regex= /\d/;

    if(regex.test(control.value) && control.value !== null) {
      return null;
    } else {
      return {passwordInvalid: true};
    }
  }

  static passwordsMatch (control: AbstractControl): ValidationErrors {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;

    if((password === confirmPassword) && (password !== null && confirmPassword !== null)) {
      return null;
    } else {
      return {passwordsNotMatching: true};
    }
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(3),
        CustomValidators.passwordContainsNumber
      ]],

      confirmPassword: [null, [Validators.required]],
      telephone:[null, null],
      registration:[null,[Validators.required]]
      
    },{
       validators: CustomValidators.passwordsMatch
    })
  }

  onSubmit() {
    // if(this.registerForm.invalid){
    //   return;
    // }
    const student = { 
       user:{
            name: this.registerForm.value.username,
            email:this.registerForm.value.email,
            password:this.registerForm.value.password
        },
        telephone: this.registerForm.value.telephone,
        registration: this.registerForm.value.registration
    }
    console.log(this.registerForm.value);
    this.authService.register(student).pipe(
      map(user => this.router.navigate(['login']))
    ).subscribe()
  }

}

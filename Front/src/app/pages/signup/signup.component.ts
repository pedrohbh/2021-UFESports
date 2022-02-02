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
      name: [null, [Validators.required]],
      email: [null, [ Validators.required, Validators.email, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(3), CustomValidators.passwordContainsNumber]],
      confirmPassword: [null, [Validators.required]],
      telephone: [null, ],
      registration: [null, [Validators.required]]
    },{
       validators: CustomValidators.passwordsMatch
    })
  }

  async onSubmit() {
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }

    const form = this.registerForm.value;

    const student = {
      user: {
        name: form.name,
        email: form.email,
        password: form.password,
      },
      telephone: form.telephone,
      registration: form.registration
    }

    try {
      await this.authService.register(student);
      this.router.navigate(['login']);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }

}

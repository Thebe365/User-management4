import { Component } from '@angular/core';
import { AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators, ɵFormGroupRawValue,
  ɵGetProperty,
  ɵTypedOrUntyped } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  
  email: string = ''
  password: string = ''
  form: FormGroup = this.initForm();
  initForm() {

    let form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required)
    });
    // form.addValidators(this.matchValidator(form.get('password'), form.get('confPassword')));
    return form;
  }

  // matchValidator(
  //   control: AbstractControl<ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, "password">> | null,
  //   controlTwo: AbstractControl<ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, "confPassword">> | null
  // ): ValidatorFn {
  //   return () => {
  //     if (control?.value !== controlTwo?.value)
  //       return { match_error: 'Passwords do not match' };
  //     return null;
  //   };
  // }

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit(){
    if(this.form.valid){
      console.log("form is valid")
    }else{
      console.log("form is invalid")
    }
  }
}

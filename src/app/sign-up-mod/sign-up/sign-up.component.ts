import { Component, OnInit } from '@angular/core';
import { AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators, ɵFormGroupRawValue,
  ɵGetProperty,
  ɵTypedOrUntyped } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  
  name: string = ""
  lastName: string= ""
  email: string = ""
  phoneNumber: number = 0
  password: string = ""
  confPassword: string = ""
  form: FormGroup = this.initForm();
  

  constructor(private fb: FormBuilder, private router: Router, private service: AuthService) {}

  initForm() {

    // console.log(this.http.getAll.length)
    let form = this.fb.group({
      name: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phoneNumber: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      confPassword: this.fb.control('', Validators.required)
    });
    form.addValidators(this.matchValidator(form.get('password'), form.get('confPassword')));
    return form;
  }

  matchValidator(
    control: AbstractControl<ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, "password">> | null,
    controlTwo: AbstractControl<ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, "confPassword">> | null
  ): ValidatorFn {
    return () => {
      if (control?.value !== controlTwo?.value)
        return { match_error: 'Passwords do not match' };
      return null;
    };
  }

  // Submit form
  formSubmitted(){

    // Check if form is valid
    if(this.form.valid){
      
      // Enter new user
      console.log("It must work")
      console.log(this.service.getAllUsers())

    }else if(this.form.invalid){
      
      // Display error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }

  ngOnInit(): void {
    
  }
}

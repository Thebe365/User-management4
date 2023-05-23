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
  
  users: object = []
  constructor(private fb: FormBuilder, private router: Router, private service: AuthService) {}

  
  initForm() {

    // console.log(this.http.getAll.length)
    let form = this.fb.group({
      name: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      id: this.fb.control('', [Validators.required, Validators.email]),
      phone: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      confPassword: this.fb.control('', Validators.required),
      role: this.fb.control('user'),
      active: this.fb.control(true)
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
      
      console.log(this.form.value)
      // Enter new user
      this.service.registerUser(this.form.value).subscribe(res =>{
        this.users = res
      }, (error: Response) => {
        if(error.status === 500){
          Swal.fire({
            title: 'Error',
            text: 'User already exists.',
            imageUrl: 'https://64.media.tumblr.com/6f223b7b7e3be3353873ae59a2b1fc5a/tumblr_pvvlqkzDAJ1xd6vc6o1_540.gif',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
          })
        }else{
          console.log("Something definately went wrong")
        }
      })

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

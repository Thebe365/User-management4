import { Component } from '@angular/core';
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
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  
  email: string = ''
  password: string = ''
  userData: any;

  form: FormGroup = this.initForm();
  initForm() {

    
    let form = this.fb.group({
      id: this.fb.control('', [Validators.required]),
      password: this.fb.control('', Validators.required)
    });
    // form.addValidators(this.matchValidator(form.get('password'), form.get('confPassword')));
    return form;
  }

  constructor(private fb: FormBuilder, private router: Router, private service: AuthService) {}

  onSubmit(){
    
    // Check if form is valid
    if(this.form.valid){
      
      // Validate user 
      this.service.getUserById(this.form.value.id).subscribe(res =>{

        this.userData = res

        console.log(this.userData)
        //Check if user does exist

        // Validate passwords
        if(this.userData.password === this.form.value.password){

          if(this.userData.active){
            // Set session data
            sessionStorage.setItem('email', this.userData.id)
            sessionStorage.setItem('userRole', this.userData.role)

            // Route user to dashboard
            this.router.navigate(['./dashboard'])
          }else{

            // Display message
            Swal.fire({

              icon: 'info',
              title: 'Acount inactive',
              text: 'Contact admin!'
            })
          }
        }else{

          // Display error message
          Swal.fire({

            icon: 'error',
            title: 'Oops...',
            text: 'Invalid login details!'
          })
        }
        
      }, (error: Response) =>{

        if(error.status === 404){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Account does not exist!'
          })
        }
      })
    }else{
      
      // Display error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }
  }
}

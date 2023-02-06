import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatePassword, ValidateContactNo } from '../shared/custompassword.validator';
import { PasswordMatchValidator } from '../shared/crossfieldcustompassword.validator';

@Component({
  selector: 'app-reactive-from-com',
  templateUrl: './reactive-from-com.component.html',
  styleUrls: ['./reactive-from-com.component.css']
})
export class ReactiveFromComComponent implements OnInit {
  showWorkingContainer:string = 'reactivePractical'

  constructor(private fb: FormBuilder) { }
  

  
  // REACTIVE FORM CREATED USING FORM GROUP
  registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      state: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl('')
    })
  })



  // REACTIVE FORM CREATED USING FORMBUILDER
  fbregistrationForm = this.fb.group({
    fbusername: ['', [Validators.required, Validators.minLength(3)]],
    fbpassword: ['', [Validators.required, ValidatePassword]],
    fbconfirmpassword: [''],
    fbemail: [''],
    fbsubscribe: [false],
    fbcontactno: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(13), ValidateContactNo]],
    fbaddress: this.fb.group({
      fbstate: [''],
      fbcity: [''],
      fbpincode: ['']
    })
  }, {validator: PasswordMatchValidator})


  ngOnInit(): void {
    // BELOW CODE IS FOR DYNAMIC ADDING VALIDATION DYNAMICALLY.
    this.fbregistrationForm.get('fbsubscribe')?.valueChanges.subscribe(value => {
      let emailFieldControl = this.fbregistrationForm.get('fbemail')
      if(value){
        emailFieldControl?.setValidators(Validators.required)
      }else{
        emailFieldControl?.clearValidators()
      }
      emailFieldControl?.updateValueAndValidity()
    })
  }


  setFormData(){
    this.registrationForm.setValue({
      username: 'Shreyas', 
      password: 'pass',
      fbconfirmpassword: 'cpass',
      address: {
        state: 'Maha',
        city: 'Virar',
        pincode: '401303'
      }
    })
  }


  patchSingleValue(){
    this.registrationForm.patchValue({username: 'Shreyas Ambre' })
  }


  fbsetFormData(){
    this.fbregistrationForm.setValue({
      fbusername: 'Shreyas', 
      fbpassword: 'pass',
      fbconfirmPassword: 'cpass',
      fbemail: 'abc@123',
      fbsubscribe: true,
      fbcontactno: '8087025879',
      fbaddress: {
        fbstate: 'Maha',
        fbcity: 'Virar',
        fbpincode: '401303'
      }
    })
  }

  fbpatchSingleValue(){

  }


  onSubmit(){
    console.log("FORM VALUES =>", this.fbregistrationForm.value)
  }

}

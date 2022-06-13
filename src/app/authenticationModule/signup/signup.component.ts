import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','../login/login.component.css']
})
export class SignupComponent implements OnInit {
 signinForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
      this.signinForm= this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]],
      name:['',[Validators.required]],
    })
  }
  onSubmit(){
    
  }

}

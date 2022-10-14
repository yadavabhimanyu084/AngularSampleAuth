import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/_models/user.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    const userLogin = new UserLogin();
    userLogin.emailId = this.form.controls["email"].value;
    userLogin.password = this.form.controls["password"].value;
    console.log(userLogin)
    this.userService.login(userLogin).subscribe((response:any)=>{
      if(!response.Haserror)
      {
        const User = JSON.stringify(response.ReturnData);
        localStorage.setItem('response', User); //use different object
        // Save allEntries back to local storage
        
       // localStorage.setItem("response",JSON.stringify(response.ReturnData));
        this.router.navigate(['/layout/account']);
      }
      else
      {
        alert("Invalid credentials");
      }
    })
  }

}

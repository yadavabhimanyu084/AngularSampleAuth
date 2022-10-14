import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistration } from 'src/app/_models/user.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  roleList: any[] = [{ Id: 1, value: "Admin" }, { Id: 2, value: "Normal User" }];
  modulelist: any[] = [{ Id: 1, value: "Dashboard" }, { Id: 2, value: "Signup" }, { Id: 3, value: "Customer Journey" }, { Id: 4, value: "Company Verification" }, { Id: 5, value: "Call Center" }, { Id: 6, value: "Company" }, { Id: 7, value: "Vendors" }, { Id: 8, value: "Claim Against" }, { Id: 7, value: "Defaulter" }, { Id: 9, value: "Published Conpanies" }, { Id: 10, value: "Subscription Management" }, { Id: 11, value: "Web Subscriber" }]

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router) { 
}

  ngOnInit() {
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roles: ['', [Validators.required]],
      modules: ['', [Validators.required]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    const userRegistration = new UserRegistration();
    userRegistration.fullName = this.form.controls["fullName"].value;
    userRegistration.emailId = this.form.controls["email"].value;
    userRegistration.mobile = this.form.controls["mobile"].value;
    userRegistration.password = this.form.controls["password"].value;
    const userTypeId = this.form.controls["roles"].value;
    userRegistration.userTypId = userTypeId.toString();
    const moduleIds = this.form.controls["modules"].value;
    userRegistration.moduleIds = moduleIds.toString();
    console.log(userRegistration)
    this.userService.register(userRegistration).subscribe((response:any)=>{
      if(!response.Haserror)
      {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };
      }
    })
  }

}

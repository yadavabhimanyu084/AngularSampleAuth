import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  roleList: any[] = [{ Id: 1, value: "admin" }, { Id: 2, value: "Normal User" }];
  modulelist: any[] = [{ Id: 1, value: "Payment Module" }, { Id: 2, value: "Management Module" }, { Id: 3, value: "Task Module" }]

  constructor(private formBuilder: FormBuilder,private userSerivce:UserService) { 
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
    this.userSerivce.register(userRegistration).subscribe((response:any)=>{

    })
  }

}

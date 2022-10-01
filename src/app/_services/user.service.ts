import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { UserRegistration } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url =environment.url;
  constructor(private http:HttpClient) { }

  register(register:UserRegistration){
    return this.http.post(this.url +"api/ZycaraAdmin/UserRegistration",register);
  }
}

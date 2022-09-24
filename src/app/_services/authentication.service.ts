import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 user: any = {
  role:1,
  userName:"prince"
 };
  constructor() { }


  login(username: string, password: string) {
    return this.user;
  };
}



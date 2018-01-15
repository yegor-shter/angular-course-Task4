import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Login }   from './../Ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: Login = {name: "", pass: ""};
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {}
     addUser() {
      this.loginService.register(this.user);
      console.log(this.user);

    }


}

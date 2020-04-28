import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: "",
    password: ""
  }
  constructor(private _auth: AuthService, private router: Router, private toastrservice: ToastrService) {

  }
  ngOnInit() {
  }
  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
        },

        err => console.log(err)

      )
    this.router.navigate(['/home']);
    this.showSuccess()
  }
  showSuccess() {
    this.toastrservice.success('login successfully');
  }
}


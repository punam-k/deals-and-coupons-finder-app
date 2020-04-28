import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _authService: AuthService,
    private router: Router){}


  ngOnInit(): void {
  }


  onLogoutClick(){
    this._authService.logoutUser();
    this.router.navigate(['/login']);
    return false;
  }

 

}

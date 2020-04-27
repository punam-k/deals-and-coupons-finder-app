import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }


  // if(isset($_SESSION['logged_in'])){
  //   this.router.navigate(['/home']);
  //   }else{
  //     this.router.navigate(['/home']);
  //   }

  logout() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }

}

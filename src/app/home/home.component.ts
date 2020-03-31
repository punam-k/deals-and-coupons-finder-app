import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  User:any = [];

  constructor(private apiService: ApiService) { 
    
    this.readUser();
  }

  ngOnInit() {}

  readUser(){
    this.apiService.getUsers().subscribe((data) => {
     this.User = data;
    })    
  }

  removeUser(user, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteUser(user._id).subscribe((data) => {
          this.User.splice(index, 1);
        }
      )    
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private service: AuthService){}
  ngOnInit(): void {
    this.getUser();
  }

  // Create an empty user data array
  userdata: any

  getUser(){
    this.service.getAllUsers().subscribe(res => {
      this.userdata = res
    })
  }
  
  
  
}

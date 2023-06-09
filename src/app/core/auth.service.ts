import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    // Server url
    url = 'http://localhost:3000/user'

    // Get all users
    getAllUsers(){
      return this.http.get(this.url)
    }

    // Get user by id
    getUserById(id: any){
      return this.http.get(this.url + '/' + id)
    }

    // Register a new user
    registerUser(data: any){
      return this.http.post(this.url, data)
    }

    // Update user details
    updateUser(id: string, inputData: any){
      return this.http.put(this.url + '/' + id, inputData)
    }

    //User is logged in
    loggedIn(){
      return sessionStorage.getItem('email')!=null
    }

    // User role
    getRole(){
      return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():''
    }
}

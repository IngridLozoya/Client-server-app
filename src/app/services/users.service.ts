import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserResult } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {
    //this.getUsers().subscribe((result:UserResult)=>{
      //console.log(result.data);
    //});

   }

   getUsers(){
     return this.http.get<UserResult>("http://reqres.in/api/users?page=1")
   }


}

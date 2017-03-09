import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class Service {
  token: string;
  isAuth: boolean;
  user_id: any;
  semesters: any[]=[];
  constructor(private http:Http,private jwtHelper: JwtHelper) {
    this.user_id=0;
    this.http = http;
    this.token = "init";
    this.isAuth=false;
  }


  getToken() {
    return this.token;
  }
  isAuthenticated(){
    return this.isAuth;
  }
  setToken(token){
  let data=  this.jwtHelper.decodeToken(token);
  this.user_id=data.id;
    this.token=token;
    this.isAuth=true;
  }
  getId(){
    return this.user_id;
  }
  setSemesters(semesters){
    this.semesters=semesters;
  }
  getSemesters(){
    return this.semesters;
  }
}

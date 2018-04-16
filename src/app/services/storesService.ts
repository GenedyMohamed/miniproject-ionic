import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class StoresService {

  constructor(public http: Http) {
    console.log('Hello StoresProvider Provider');
  }

}

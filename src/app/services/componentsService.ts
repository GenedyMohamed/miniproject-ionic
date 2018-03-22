import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ComponentsService {

  constructor(public http: Http) {
    console.log('Hello ComponentsProvider Provider');
  }

}

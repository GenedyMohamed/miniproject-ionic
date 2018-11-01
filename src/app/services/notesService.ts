import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class NotesService {

  constructor(public http: Http) {
    console.log('Hello NotesProvider Provider');
  }

}

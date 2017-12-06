import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import * as config from '../../app/config.json';

@Injectable()
export class QuestionsService {
  constructor(private http: Http, private jwtHelper: JwtHelper) {
    this.http = http;
  }

  getAnswers(question_id) {
    return new Promise((resolve, reject) => {
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');

      var url = config.server + 'api/v1/answers/' + question_id + '/latest';

      this.http.get(url).map(res => res.json()).subscribe(data => {
        resolve(data.data)
      },
        err => {
          reject(err)
        });
    })
  }

  getQuestions(course_id) : Promise<any>{
    return new Promise((resolve, reject)=>{
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');

      var url = config.server + 'api/v1/browse/' + course_id;
      this.http.get(url).map(res => res.json()).subscribe(questions => {
        resolve(questions);
      },
        err => {
          reject(err);
        });
    })
  }

  more(url){
    return new Promise((resolve, reject)=>{
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');

      var url = config.server + url;
      console.log(url)
      this.http.get(url).map(res => res.json()).subscribe(questions_new => {
        resolve(questions_new)
      },
        err => {
          reject(err)
        });
    })
  }

  up(question_id,token){
    return new Promise((resolve, reject)=>{
      let headers1 = new Headers();

      headers1.append('x-access-token', token);
      var url = config.server + "api/v1/vote/question/" + question_id + "/0";

      this.http.get(url, { headers: headers1 }).map(res => res.json()).subscribe(data => {
        resolve(data);
      },
        err => {
          reject(err);
        });
    })
  }

  down(question_id, token){
    return new Promise((resolve, reject)=>{
      let headers1 = new Headers();

      headers1.append('x-access-token', token);
      var url = config.server + "api/v1/vote/question/" + question_id + "/0";

      this.http.get(url, { headers: headers1 }).map(res => res.json()).subscribe(data => {
        resolve(data);
      },
        err => {
          reject(err);
        });
    })
  }
}

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

  getQuestions(course_id): Promise<any> {
    return new Promise((resolve, reject) => {
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

  more(url) {
    return new Promise((resolve, reject) => {
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

  up(question_id, token) {
    return new Promise((resolve, reject) => {
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

  down(question_id, token) {
    return new Promise((resolve, reject) => {
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

  askQuestion(token, course_id, question) {
    return new Promise((resolve, reject) => {
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
      headers1.append('x-access-token', token);
      var url = config.server + 'api/v1/browse/' + course_id;
      let data = { question: question };
      this.http.post(url, data, { headers: headers1 }).map(res => res.json()).subscribe(data => {
        resolve(data);
      },
        err => {
          reject(err);
        });
    });
  }

  getCourses(major_id, semester) {
  /*getCourses() {

    let courses = [
      {
        "course_name": "Course 1",
        "course_code": "CSEN 101",
        "Semester": 1,
      },
      {
        "course_name": "Course 2",
        "course_code": "CSEN 102",
        "Semester": 1,
      },
      {
        "course_name": "Course 3",
        "course_code": "CSEN 103",
        "Semester": 1,
      }
    ]

    return courses; */

    return new Promise((resolve, reject) => {
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');

      var url = config.server + 'api/v1/list_courses/' + major_id + '/' + semester;

      this.http.get(url).map(res => res.json()).subscribe(data => {
        resolve(data);
      },
        err => {
          reject(err);
        });
    });

  }

  getMajors() {
    return new Promise((resolve, reject) => {
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
      var url = config.server + 'api/v1/browse/';
      console.log(url)

      this.http.get(url).map(res => res.json()).subscribe(data => {
        resolve(data);
      },
        err => {
          reject(err);
        });
    });
  }

  postAnswer(token, question_id, answer) {
    return new Promise((resolve, reject) => {
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
      headers1.append('x-access-token', token);
      var url = config.server + 'api/v1/answers/' + question_id;
      console.log(url);
      console.log(headers1)
      let data = { answer: answer };
      this.http.post(url, data, { headers: headers1 }).map(res => res.json()).subscribe(data => {
        resolve(data);
      },
        err => {
          resolve(err);
        });
    });
  }
}

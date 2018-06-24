import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Thread } from '../shared/Thread.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadViewService{

  private _url = 'http://localhost/imgboard_backend/public/threads';

  httpOptions =  {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    })
  };

  constructor(private http: HttpClient) { }

  fetchThreads(): Observable<Thread[]> {
    return this.http.get<Thread[]>(this._url);
  }

  postThread(thread: Thread): Observable<any> {
    console.log(thread);
    return this.http.post('http://localhost/imgboard_backend/public/threads', thread, this.httpOptions);
  }
}

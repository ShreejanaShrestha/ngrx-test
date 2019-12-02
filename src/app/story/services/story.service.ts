import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('http://192.168.1.64:8000/api/sasoft/languages');
  }
}

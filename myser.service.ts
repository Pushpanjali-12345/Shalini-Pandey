import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserService {

  constructor(private http:HttpClient) { }
  CallApi()
  {
  return this.http.get("http://jsonplaceholder.typicode.com/posts");
  }
}
 
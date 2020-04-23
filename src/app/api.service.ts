import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()

export class ApiService {
  server = environment.server;

  constructor(private http: HttpClient) { }

  get(uri: string){
    return this.http.get(`${this.server.url}/${uri}`);
  }

  post(uri: string , payload: object){
    return this.http.post(`${this.server.url}/${uri}`, payload);
  }

  patch(uri: string , payload: object){
    return this.http.post(`${this.server.url}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.server.url}/${uri}`);
  }
}

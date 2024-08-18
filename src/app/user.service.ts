import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './interface/article';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private client: HttpClient) {}
  getApi() {
    return this.client.get<Article[]>('https://localhost:7064/api/Article');
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './interface/article';
import { Articles } from './interface/Articles';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private client: HttpClient) {}
  getApi() {
    return this.client.get<Article[]>('https://localhost:7064/api/Article');
  }
  formPost(data: any) {
    return this.client.get<Articles[]>('https://localhost:7274/api/Articles');
  }
}

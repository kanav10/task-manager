import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class TaskService {

  constructor(private apiService: ApiService) { }

  createList(title: string){
    return this.apiService.post('lists', { title });

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesHttpService {
  baseUrl = `${environment.urlBase}courses/`;
  constructor(private readonly http: HttpClient) { }

  search() {
    return this.http.get(this.baseUrl);
  }

  searchOne(id) {
    return this.http.get(this.baseUrl + id);
  }

  delete(id) {
    return this.http.delete(this.baseUrl + id);
  }

  save(data) {
    return this.http.post(this.baseUrl, data);
  }

  update(id, data) {
    return this.http.put(this.baseUrl + id, data);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = environment.baseUrl;
  private indexUrl = "api/index";
  private searchUrl = "api/search";

  constructor(private http: HttpClient) { }

  uploadFile(formData: FormData) {
    return this.http.post(`${this.baseUrl}${this.indexUrl}`, formData)
  }

  searchSimple(query: any) {
    return this.http.post(`${this.baseUrl}${this.searchUrl}/simple`, query);
  }

  searchAdvanced(query: any) {
    return this.http.post(`${this.baseUrl}${this.searchUrl}/advanced`, query);
  }
}

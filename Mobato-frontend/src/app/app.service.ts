import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = 'http://localhost:1111/Mobato';

  constructor(private http: HttpClient) {}

  addMobile(mobile: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-mobile`, mobile);
  }

  viewMobile(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get-all-mobile`);
  }
}

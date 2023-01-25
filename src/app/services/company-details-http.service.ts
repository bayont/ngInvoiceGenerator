import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDetails } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsHttpService {
  constructor(private http: HttpClient) {}
  private readonly ENDPOINT = `http://${window.location.host}/assets/company.json`;

  fetchCompanyDetails(): Observable<CompanyDetails> {
    return this.http.get<CompanyDetails>(this.ENDPOINT);
  }
}

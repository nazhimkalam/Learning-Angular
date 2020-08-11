import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  private _url: string = '../assets/employees.json';
  getEmployeeDetails(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}

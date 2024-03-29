import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Uloga } from 'src/app/modeli/uloga-model';

@Injectable()
export class UlogeService {

  public API = 'https://localhost:44305/api';
  public USER_API = `${this.API}/uloga`;
  constructor(private http: HttpClient) { }

  public getAll(pageIndex: number, pageSize: number,
    sortActive: string, sortDirection: string): Observable<Array<Uloga>> {

    let url = this.USER_API + "?pageSize=" + pageSize.toString() + "&pageIndex=" + pageIndex.toString()
      + "&sortColumn=" + sortActive + "&sortOrder=" + sortDirection;

    return this.http.get<Array<Uloga>>(url);
  }

  public getAllRoles(): Observable<Array<Uloga>> {
    let url = 'https://localhost:44305/api/uloga'
    return this.http.get<Array<Uloga>>(url);
  }

  public getCount(): Observable<number> {
    let url = this.USER_API + "/count";
    return this.http.get<number>(url);
  }

  public get(id: number): Observable<Uloga> {
    let url = this.USER_API + '/' + id.toString();

    return this.http.get<Uloga>(url);
  }

  public add(uloga: Uloga): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post<boolean>(this.USER_API, JSON.stringify(uloga), { headers: headers });

  }
  public delete(id: number): Observable<boolean> {
    let params = new HttpParams();
    params = params.append("id", id.toString());

    return this.http.delete<boolean>(this.USER_API, { params: params });
  }
  public update(uloga: Uloga): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.put<boolean>(this.USER_API, JSON.stringify(uloga), { headers: headers });

  }
}

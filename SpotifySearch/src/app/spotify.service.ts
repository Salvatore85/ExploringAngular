import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable()
export class SpotifySearchService {
  private API_PATH = 'https://api.spotify.com/v1/search';
  private token: string;

  constructor(private http: HttpClient) {
    //check if auth token in url
    if (window.location.hash.match(/#access_token/i)) {
      this.token = window.location.hash.split('=')[1];
    }
    //if not redirect
    else {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=8aa495d9c8c24042b11fa8a561330200&redirect_uri=http:%2F%2F${window.location.host}&response_type=token`;
    }
  }

  search(query: string, type: string): Observable<string[]> {
    let params = new HttpParams()
      .set('type', type)
      .set('q', query);

    let headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });

    return this.http.get(this.API_PATH, { params: params, headers: headers }).pipe(
      map(res => this.mapToNames(res, type) || []),
      catchError(this.handleError)
    );
  }

  private mapToNames(response: any, type: string): string[] {
    let collection = <any[]>response[type + 's'].items;
    return collection.map(item => item.name);
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    return throwError('Server error');
  }

}
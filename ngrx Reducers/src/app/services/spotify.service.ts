import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Track } from '../models/track';



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

  searchTracks(query: string): Observable<Track[]> {
    let params = new HttpParams()
      .set('type', 'track')
      .set('q', query);

    let headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });

    return this.http.get(this.API_PATH, { params: params, headers: headers }).pipe(
      map(res => this.mapToTracks(res) || []),
      catchError(this.handleError)
    );
  }

  private mapToTracks(response: any): Track[] {
    let collection = <any[]>response.tracks.items;
    return collection.map(this.mapToTrack);
  }

  private mapToTrack(item: any): Track {
    return new Track(
      item.id,
      item.name,
      item.artists[0] && item.artists[0].name,
      item.album && item.album.name,
      item.album && item.album.images[0].url,
      item.uri
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    return throwError('Server error');
  }

}
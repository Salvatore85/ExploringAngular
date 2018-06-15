import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import {SearchActions, SearchActionTypes, Start, Success, Failure} from "../actions/search";
import { SpotifySearchService } from "../services/spotify.service";

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions, private _spotifySearchService: SpotifySearchService) { }

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(SearchActionTypes.Start)
    .pipe(
      map(a => (<Start>a).payload),
      switchMap(query => this._spotifySearchService.searchTracks(query)
        .pipe(
          map(data => new Success(data)),
          catchError(err => of(new Failure()) 
        )
      )
    )
  );

}
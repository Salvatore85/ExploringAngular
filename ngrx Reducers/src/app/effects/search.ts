import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

//import {SearchActions, SearchActionTypes, Start, Success, Failure} from "../actions/search";
import { SpotifySearchService } from "../services/spotify.service";
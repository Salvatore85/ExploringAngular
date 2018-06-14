import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, of, combineLatest } from 'rxjs';
import { map, catchError, filter, debounceTime, distinctUntilChanged, switchMap, tap, startWith } from 'rxjs/operators';

import { SpotifySearchService } from './spotify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  types = ['track', 'album', 'artist'];
  form: FormGroup;
  results: string[] = [];
  error: string | null;

  term$: Observable<string>;
  type$: Observable<string>;

  constructor(private fb: FormBuilder, private spotifySearchService: SpotifySearchService) {
    this.form = fb.group({
      term: [''],
      type: [this.types[0]]
    });

    this.term$ = this.form.controls.term.valueChanges;
    this.type$ = this.form.controls.type.valueChanges;
  }

  ngOnInit(): void {
    
    let startedType$ = this.type$.pipe(startWith(this.form.controls.type.value));

    let debouncedTerm$ = this.term$.pipe(
      filter(term => term && term.length > 2),
      debounceTime(300),
      distinctUntilChanged());

      combineLatest(debouncedTerm$, this.type$).pipe(
        tap(arr => this.error = null),
        switchMap(([term, type]) =>
      this.spotifySearchService.search(term, type).pipe(
        catchError(err => {
          this.error = err;
          return of ([]);
        })
      ))
      )
    .subscribe(results => this.results = results);

  }

}

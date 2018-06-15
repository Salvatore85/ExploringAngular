// import { TestBed, fakeAsync, tick } from "@angular/core/testing";
// import { provideMockActions } from '@ngrx/effects/testing';
// import { Observable, ReplaySubject, of, throwError } from "rxjs";

// import { Track } from "../models/track";
// import { SpotifySearchService } from "../services/spotify.service";
// import { SearchEffects } from "./search";
// import { Start,Success, Failure } from "../actions/search";


// describe('SearchEffects', () => {
//   let searchEffects: SearchEffects, actions: ReplaySubject<any>, spotifySearchService: any;

//   beforeEach(() => TestBed.configureTestingModule({
//     providers: [
//       SearchEffects,
//       provideMockActions(() => actions),
//       {
//         provide: SpotifySearchService,
//         useValue: jasmine.createSpyObj('spotifySearchService', ['searchTracks'])
//       }
//     ]
//   }));

//   beforeEach(() => {
//     searchEffects = TestBed.get(SearchEffects);
//     spotifySearchService = TestBed.get(SpotifySearchService);
//   });

//   it('should return a SEARCH_SUCCESS action, on success', () => {
//     const tracksToReturn = [new Track('track1', '', '', '', '', '')];
//     const expectedResult = new Success(tracksToReturn);
//     actions = new ReplaySubject(1);

//     //mock service
//     spotifySearchService.searchTracks.and.returnValue(of(tracksToReturn));

//     //do it
//     actions.next(new Start('test'));

//     searchEffects.search$.subscribe(result => {
//       expect(result).toEqual(expectedResult);
//     });
//   });

//   it('should return a SEARCH_FAIL action, on error', () => {
//     const expectedResult = new Failure();
//     actions = new ReplaySubject(1);

//     //mock service
//     spotifySearchService.searchTracks.and.returnValue(throwError('error'));

//     //do it
//     actions.next(new Start('test'));

//     searchEffects.search$.subscribe(result => {
//       expect(result).toEqual(expectedResult);
//     });
//   });

// });
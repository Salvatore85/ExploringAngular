// import { combineReducers } from '@ngrx/store';
// import { reducers, State } from './index';
// import { Track } from '../models/track';
// import * as fromPlaylist from './playlist';
// import * as playlistActions from '../actions/playlist';

// describe('StoreReducer', () => {
//   let store: State;
//   let reducer = combineReducers(reducers);

//   beforeEach(() => {
//     store = {
//       tracks: {
//         orderIds: ['track1', 'track2', 'track3'],
//         entities: {
//           'track1': new Track('track1', '', '', '', '', ''),
//           'track2': new Track('track2', '', '', '', '', ''),
//           'track3': new Track('track3', '', '', '', '', '')
//         },
//         selectedId: 'track1'
//       },
//       playlist: {
//         ids: ['track2', 'track3'],
//       },
//       recent: {
//         ids: ['track2', 'track1', 'track3'],
//       },
//       search: {
//         ids: ['track2'],
//         query: 'test',
//         errorMessage: null
//       },
//       ui: {
//         ongoingOperations: [],
//         showSideBar: false
//       }
//     }
//   });

//   //just one sample out of the many things we could test
//   it('should add the track', () => {
//     const expected: fromPlaylist.State = { ids: ['track2', 'track3', 'track4'] };

//     let result: State = reducer(store, new playlistActions.AddTrack('track4'));

//     expect(result.playlist).toEqual(expected);
//     expect(result.playlist).not.toBe(expected); //playlist reference should be different
//     expect(result).not.toBe(store);             //store reference is different
//     expect(result.tracks).toBe(store.tracks);   //others are unaffected
//     expect(result.recent).toBe(store.recent);
//     expect(result.search).toBe(store.search);
//     expect(result.ui).toBe(store.ui);
//   });

// });
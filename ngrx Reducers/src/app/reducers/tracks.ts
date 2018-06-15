import * as searchActions from './../actions/search';
import { SearchActions, SearchActionTypes } from './../actions/search';
import * as trackActions from './../actions/tracks';
import { TrackActions, TrackActionTypes } from './../actions/tracks';
import { Track } from "../models/Track";


// export interface State {
//   orderIds: string[],
//   entities: { [id: string]: Track };
//   selectedId: string;
// };

// const initialState: State = {
//   orderIds: [],
//   entities: {},
//   selectedId: null
// };

// export function reducer(state = initialState, action: TrackActions | SearchActions): State {
//   switch (action.type) {
//     case SearchActionTypes.Success: {
//       const tracks = action.payload;
//       const newTracks = tracks.filter(tr => !state.entities[tr.id]); //filter duplicates
//       const newTrackIds = newTracks.map(tr => tr.id);

//       const newTrackEntities = newTracks.reduce((prev: { [id: string]: Track }, newTrack) => { //turn array into hash object
//         prev[newTrack.id] = newTrack;
//         return prev;
//       }, {});

//       return {
//         ...state,
//         orderIds: [...state.orderIds, ...newTrackIds],
//         entities: { ...state.entities, ...newTrackEntities }
//       };
//     }

//     case TrackActionTypes.Select: {
//       const trackId = action.payload;
//       return {
//         ...state,
//         selectedId: trackId
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// }
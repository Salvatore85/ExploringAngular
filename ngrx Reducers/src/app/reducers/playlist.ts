//import
import { PlaylistActions, PlaylistActionTypes } from '../actions/playlist';

//shape
export interface State {
  ids: string[];
};

//initial state
const initialState: State = {
  ids: []
};

//reducer
export function reducer(state = initialState, action: PlaylistActions): State {
  switch (action.type) {
    case PlaylistActionTypes.AddTrack: {
      const trackId = action.payload;
      return {
        ids: [...state.ids, trackId],
      };
    }

    case PlaylistActionTypes.RemoveTrack: {
      const trackId = action.payload;
      return {
        ids: state.ids.filter(id => id !== trackId)
      };
    }

    default: {
      return state;
    }
  }
}
import { TrackActions, TrackActionTypes } from "../actions/tracks";

const NUMBER_OF_RECENTS = 5;

export interface State {
     ids: string[];
};

const initialState: State = {
    ids: []
};

export function reducer(state = initialState, action: TrackActions ): State {
  switch (action.type) {
    case TrackActionTypes.Select: {
      const trackId = action.payload;
      //filter out trackId if already there
      let newIds = state.ids.filter(id => id !== trackId);
      //add trackId as first
      newIds = [trackId, ...newIds]
      //limit length
      newIds = newIds.slice(0, NUMBER_OF_RECENTS);
      return {
        ids: newIds
      };
    }

    default: {
      return state;
    }
  }
}
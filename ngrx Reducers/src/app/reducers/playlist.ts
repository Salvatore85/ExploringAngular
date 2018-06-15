import { PlayListActions, PlayListActionTypes } from '../actions/playlist';

export interface State {
    ids: string[];
};

const initialState: State = {
    ids: []
};

export function reducer(state = initialState, action: PlayListActions) :State{
    switch (action.type) {
        case PlayListActionTypes.AddTrack: {
            const trackId = action.payload;
            return {
                ids: [...state.ids, trackId],
            };
        }
        case PlayListActionTypes.RemoveTrack: {
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

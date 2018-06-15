import { SearchActions, SearchActionTypes } from "../actions/search";

export interface State {
  ids: string[];
  query: string;
  errorMessage: string;
};

const initialState: State = {
  ids: [],
  query: '',
  errorMessage: null
};

export function reducer(state = initialState, action: SearchActions): State {
  switch (action.type) {
    case SearchActionTypes.Start:  {
      const query = action.payload;
      return {
        ...state,
        query: query,
        errorMessage: null
      };
    }
    case SearchActionTypes.Success: {
      const tracks = action.payload;
      return {
        ...state,
        ids: tracks.map(tr => tr.id),
        errorMessage: null
      };
    }
    case SearchActionTypes.Failure: {
      return {
        ...state,
        ids: [],
        errorMessage: 'search failed'
      };
    }

    default: {
      return state;
    }
  }
}
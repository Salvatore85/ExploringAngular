import { UIActions, UIActionTypes, ShowSidebar } from "../actions/ui";
import { SearchActionTypes, SearchActions } from "../actions/search";

export const SEARCH_OPERATION = 'SEARCH_OPERATION';


export interface State {
  ongoingOperations: string[];
  showSideBar: boolean;
};

const initialState: State = {
  ongoingOperations: [],
  showSideBar: false
};

export function reducer(state = initialState, action: UIActions | SearchActions ): State {
  switch (action.type) {
    case UIActionTypes.ShowSidebar:{
      const isVisible = (<ShowSidebar>action).payload;
      return {
        ...state,
        showSideBar: isVisible
      };
    }
    case SearchActionTypes.Start: {
      const hasOperation = state.ongoingOperations.includes(SEARCH_OPERATION);
      if (hasOperation) {
        return state;
      } else {
        return {
          ...state,
          ongoingOperations: state.ongoingOperations.concat(SEARCH_OPERATION)
        };
      }
    }
    case SearchActionTypes.Success:
    case SearchActionTypes.Failure: {
      return {
        ...state,
        ongoingOperations: state.ongoingOperations.filter(op => op !== SEARCH_OPERATION)
      };
    }

    default: {
      return state;
    }
  }
}
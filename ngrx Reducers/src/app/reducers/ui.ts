// import { UIActions, UIActionTypes, ShowSidebar } from "../actions/ui";
// import { SearchActionTypes, SearchActions } from "../actions/search";

export const SEARCH_OPERATION = 'SEARCH_OPERATION';


export interface State {
  ongoingOperations: string[];
  showSideBar: boolean;
};

const initialState: State = {
  ongoingOperations: [],
  showSideBar: false
};

// export function reducer(state = initialState, action: UIActions | SearchActions ): State {
//   switch (action.type) {
//     // add ui cases here

//     default: {
//       return state;
//     }
//   }
// }
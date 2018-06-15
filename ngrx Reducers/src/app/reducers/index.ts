import { ActionReducerMap } from '@ngrx/store';

import * as fromTracks from './tracks';
import * as fromSearch from './search';
import * as fromPlaylist from './playlist';
import * as fromRecent from './recent';
import * as fromUI from './ui';

export interface State {
  tracks: fromTracks.State;
  search: fromSearch.State;
  playlist: fromPlaylist.State;
  recent: fromRecent.State;
  ui: fromUI.State;
}

export const reducers: ActionReducerMap<State> = {
  tracks: fromTracks.reducer,
  search: fromSearch.reducer,
  playlist: fromPlaylist.reducer,
  recent: fromRecent.reducer,
  ui: fromUI.reducer
};
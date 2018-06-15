import { Action } from "@ngrx/store";

// add 'Select' Action here
export enum TrackActionTypes {
  Select = '[Track] Select'
};

export class Select implements Action {
  readonly type = TrackActionTypes.Select;

  constructor(public payload: string) { } // track id
}

export type TrackActions
            = Select;

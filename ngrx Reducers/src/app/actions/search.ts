import { Action } from "@ngrx/store";

import { Track } from "../models/track";

export enum SearchActionTypes {
  Start = '[Search] Start',
  Success = '[Search] Success',
  Failure = '[Search] Failure',
};


export class Start implements Action {
  readonly type = SearchActionTypes.Start;

  constructor(public payload: string) { }
}

export class Success implements Action {
  readonly type = SearchActionTypes.Success;

  constructor(public payload: Track[]) { }
}

export class Failure implements Action {
  readonly type = SearchActionTypes.Failure;
}


export type SearchActions
            = Start
            | Success
            | Failure;

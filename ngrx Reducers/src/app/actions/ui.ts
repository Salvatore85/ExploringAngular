import { Action } from "@ngrx/store";

// add ui actions here
export enum UIActionTypes {
  ShowSidebar = '[UI] ShowSidebar'
};


export class ShowSidebar implements Action {
  readonly type = UIActionTypes.ShowSidebar;

  constructor(public payload: boolean) { }
}

export type UIActions
            = ShowSidebar;

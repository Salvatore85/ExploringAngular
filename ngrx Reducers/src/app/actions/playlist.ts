import { Action } from "@ngrx/store";

import { Track } from "../models/track";

//Actions
export enum PlayListActionTypes {
    AddTrack = '[Playlist] AddTrack',
    RemoveTrack = '[Playlist] RemoveTrack'
};

//Action Creators
export class AddTrack implements Action {
    readonly type = PlayListActionTypes.AddTrack;

    constructor(public payload: string) {} //track id
}

export class RemoveTrack implements Action {
    readonly type = PlayListActionTypes.RemoveTrack;

    constructor(public payload: string) {} //track id
}

export type PlayListActions = AddTrack | RemoveTrack;

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */

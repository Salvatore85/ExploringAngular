import { Action } from "@ngrx/store";

import { Track } from "../models/track";


//Actions
 export enum PlaylistActionTypes {
   AddTrack = '[Playlist] AddTrack',
   RemoveTrack = '[Playlist] RemoveTrack'
 };
 
//Action Creators
 export class AddTrack implements Action {
   readonly type = PlaylistActionTypes.AddTrack;
 
   constructor(public payload: string) { }  //track id
 }
 
 export class RemoveTrack implements Action {
   readonly type = PlaylistActionTypes.RemoveTrack;
 
   constructor(public payload: string) { } //track id
 }
 
 /**
  * Export a type alias of all actions in this action group
  * so that reducers can easily compose action types
  */
 export type PlaylistActions
             = AddTrack
             | RemoveTrack;
 
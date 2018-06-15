// import { reducer, State, SEARCH_OPERATION } from './ui';
// import *  as uiActions from './../actions/ui';
// import * as searchActions from "../actions/search";

// describe('UIReducer', () => {
//   let ui: State;

//   beforeEach(() => {
//     ui = {
//       ongoingOperations: [],
//       showSideBar: false
//     };
//   });

//   it('should not do anything with other actions', () => {
//     let result: State = reducer(ui, <any>{ type: 'NON_EXISTING' });
//     expect(result).toBe(ui);
//   });

//   it('should show the sidebar', () => {
//     const expected: State = {
//       ongoingOperations: [],
//       showSideBar: true
//     };

//     let result: State = reducer(ui, new uiActions.ShowSidebar(true));

//     expect(result).toEqual(expected);
//     expect(result).not.toBe(ui, 'ui should not be mutable');
//   });

//   it('should hide the sidebar', () => {
//     const expected: State = {
//       ongoingOperations: [],
//       showSideBar: false
//     };
//     ui.showSideBar = true;

//     let result: State = reducer(ui, new uiActions.ShowSidebar(false));

//     expect(result).toEqual(expected);
//     expect(result).not.toBe(ui, 'ui should not be mutable');
//   });

//   it('should add the ongoing search operation', () => {
//     const expected: State = {
//       ongoingOperations: [SEARCH_OPERATION],
//       showSideBar: false
//     };

//     let result: State = reducer(ui, new searchActions.Start('test'));

//     expect(result).toEqual(expected);
//     expect(result).not.toBe(ui, 'ui should not be mutable');
//   });

//   it('should remove the ongoing search operation on success', () => {
//     const expected: State = {
//       ongoingOperations: [],
//       showSideBar: false
//     };
//     ui.ongoingOperations = [SEARCH_OPERATION]

//     let result: State = reducer(ui, new searchActions.Success([]));

//     expect(result).toEqual(expected);
//     expect(result).not.toBe(ui, 'ui should not be mutable');
//   });

//   it('should remove the ongoing search operation on fail', () => {
//     const expected: State = {
//       ongoingOperations: [],
//       showSideBar: false
//     };
//     ui.ongoingOperations = [SEARCH_OPERATION]

//     let result: State = reducer(ui, new searchActions.Failure());

//     expect(result).toEqual(expected);
//     expect(result).not.toBe(ui, 'ui should not be mutable');
//   });

// });
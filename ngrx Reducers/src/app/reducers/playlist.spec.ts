import { reducer, State } from './playlist';
import { AddTrack, RemoveTrack } from "../actions/playlist";

describe('PlayListReducer', () => {
  let playlist: State;

  beforeEach(() => {
    playlist = { ids: ['track1', 'track2', 'track3'] };
  });

  it('should not do anything with other actions', () => {
    let result: State = reducer(playlist, <any>{ type: 'NON_EXISTING' });
    expect(result).toBe(playlist);
  });

  it('should add the track', () => {
    const expected: State = { ids: ['track1', 'track2', 'track3', 'track4'] };

    let result: State = reducer(playlist, new AddTrack('track4'));

    expect(result).toEqual(expected);
    expect(result).not.toBe(playlist, 'playlist should not be mutable');
  });

  it('should remove the track', () => {
    const expected: State = { ids: ['track1', 'track3'] };

    let result: State = reducer(playlist, new RemoveTrack('track2'));

    expect(result).toEqual(expected);
    expect(result).not.toBe(playlist, 'playlist should not be mutable');
  });

});
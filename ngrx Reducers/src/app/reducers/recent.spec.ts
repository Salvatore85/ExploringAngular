import { reducer, State } from './recent';
import { Select } from "../actions/tracks";

describe('RecentReducer', () => {
  let recent: State;

  beforeEach(() => {
    recent = { ids: ['track1', 'track2', 'track3'] };
  });

  it('should not do anything with other actions', () => {
    let result: State = reducer(recent, <any>{ type: 'NON_EXISTING' });
    expect(result).toBe(recent);
  });

  it('should add the track as the first item', () => {
    const expected: State = { ids: ['track4', 'track1', 'track2', 'track3'] };

    let result: State = reducer(recent, new Select('track4'));

    expect(result).toEqual(expected);
    expect(result).not.toBe(recent, 'recent should not be mutable');
  });

  it('should have no more than 5 elements', () => {
    const expected: State = { ids: ['track6', 'track5', 'track4', 'track1', 'track2'] };

    let result: State = reducer(recent, new Select('track4'));
    result = reducer(result, new Select('track5'));
    result = reducer(result, new Select('track6'));

    expect(result).toEqual(expected);
    expect(result).not.toBe(recent, 'recent should not be mutable');
  });

});
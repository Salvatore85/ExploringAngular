import { reducer, State } from './search';
import { Track } from '../models/track';
import { Start, Success, Failure } from '../actions/search';


describe('SearchReducer', () => {
  let search: State;

  beforeEach(() => {
    search = { ids: [], query: '', errorMessage: null };
  });

  it('should not do anything with other actions', () => {
    let result: State = reducer(search, <any>{ type: 'NON_EXISTING' });
    expect(result).toBe(search);
  });

  it('should start searching', function () {
    const expected: State = { ids: [], query: 'test', errorMessage: null };
    search.errorMessage = 'error';

    let result: State = reducer(search, new Start('test'));

    expect(result.errorMessage).toEqual(expected.errorMessage, 'error message was not cleared');
    expect(result.query).toEqual(expected.query, 'query was not set');
    expect(result).not.toBe(search, 'search should not be mutable');
  });


  it('should set data on success', () => {
    const expected: State = { ids: ['track1', 'track2', 'track3'], query: 'test', errorMessage: null };
    search.query = 'test';
    search.errorMessage = 'error';
    const data: Track[] = [
      new Track('track1', '', '', '', '', ''),
      new Track('track2', '', '', '', '', ''),
      new Track('track3', '', '', '', '', ''),
    ];

    let result: State = reducer(search, new Success(data));

    expect(result.errorMessage).toEqual(expected.errorMessage, 'there should be no error message');
    expect(result.query).toEqual(expected.query, 'query should still be there');
    expect(result.ids).toEqual(expected.ids, 'data was not added');
    expect(result).not.toBe(search, 'search should not be mutable');
  });

  it('should clear on fail', () => {
    const expected: State = { ids: [], query: 'test', errorMessage: 'search failed' };
    search.query = 'test';
    search.ids = ['track1', 'track2', 'track3'];

    let result: State = reducer(search, new Failure());

    expect(result.errorMessage).toBeDefined('there should be an error message');
    expect(result.query).toEqual(expected.query, 'query should still be there');
    expect(result.ids).toEqual(expected.ids, 'data was cleared');
    expect(result).not.toBe(search, 'search should not be mutable');
  });

});
import { Track } from '../models/track';
import { State as TrackState, reducer } from './tracks';
import { Select as SelectTrack } from '../actions/tracks';
import { Success as SearchSuccess } from '../actions/search';

describe('TracksReducer', () => {
  let tracks: TrackState;

  beforeEach(() => {
    tracks = {
      orderIds: ['track1', 'track2', 'track3'],
      entities: {
        'track1': new Track('track1', '', '', '', '', ''),
        'track2': new Track('track2', '', '', '', '', ''),
        'track3': new Track('track3', '', '', '', '', '')
      },
      selectedId: 'track1'
    };
  });

  it('should not do anything with other actions', () => {
    let result: TrackState = reducer(tracks, <any>{ type: 'NON_EXISTING' });
    expect(result).toBe(tracks);
  });

  it('should select the track', () => {
    const expected: TrackState = {
      orderIds: ['track1', 'track2', 'track3'],
      entities: {
        'track1': new Track('track1', '', '', '', '', ''),
        'track2': new Track('track2', '', '', '', '', ''),
        'track3': new Track('track3', '', '', '', '', '')
      },
      selectedId: 'track2'
    };

    let result: TrackState = reducer(tracks, new SelectTrack('track2'));

    expect(result).toEqual(expected);
    expect(result).not.toBe(tracks, 'tracks should not be mutable');
  });

  it('should add the new tracks on search success', () => {
    const expected: TrackState = {
      orderIds: ['track1', 'track2', 'track3', 'track4', 'track5'],
      entities: {
        'track1': new Track('track1', '', '', '', '', ''),
        'track2': new Track('track2', '', '', '', '', ''),
        'track3': new Track('track3', '', '', '', '', ''),
        'track4': new Track('track4', '', '', '', '', ''),
        'track5': new Track('track5', '', '', '', '', '')
      },
      selectedId: 'track1'
    };
    const newTracks = [
      new Track('track3', '', '', '', '', ''), //existing
      new Track('track4', '', '', '', '', ''), //new
      new Track('track5', '', '', '', '', ''), //new
    ];

    let result: TrackState = reducer(tracks, new SearchSuccess(newTracks));

    expect(result).toEqual(expected);
    expect(result).not.toBe(tracks, 'tracks should not be mutable');
  });

});
import { fromJS } from 'immutable';
import roundScreenReducer from '../reducer';

describe('roundScreenReducer', () => {
  it('returns the initial state', () => {
    expect(roundScreenReducer(undefined, {})).toEqual(fromJS({}));
  });
});

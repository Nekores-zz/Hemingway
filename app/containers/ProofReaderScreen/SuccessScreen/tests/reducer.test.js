import { fromJS } from 'immutable';
import successScreenReducer from '../reducer';

describe('successScreenReducer', () => {
  it('returns the initial state', () => {
    expect(successScreenReducer(undefined, {})).toEqual(fromJS({}));
  });
});

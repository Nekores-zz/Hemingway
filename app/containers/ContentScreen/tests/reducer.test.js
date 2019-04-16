import { fromJS } from 'immutable';
import contentScreenReducer from '../reducer';

describe('contentScreenReducer', () => {
  it('returns the initial state', () => {
    expect(contentScreenReducer(undefined, {})).toEqual(fromJS({}));
  });
});

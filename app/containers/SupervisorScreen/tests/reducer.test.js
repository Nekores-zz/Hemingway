import { fromJS } from 'immutable';
import supervisorScreenReducer from '../reducer';

describe('supervisorScreenReducer', () => {
  it('returns the initial state', () => {
    expect(supervisorScreenReducer(undefined, {})).toEqual(fromJS({}));
  });
});

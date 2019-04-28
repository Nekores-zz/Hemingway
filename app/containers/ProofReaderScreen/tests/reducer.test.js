import { fromJS } from 'immutable';
import proofReaderScreenReducer from '../reducer';

describe('proofReaderScreenReducer', () => {
  it('returns the initial state', () => {
    expect(proofReaderScreenReducer(undefined, {})).toEqual(fromJS({}));
  });
});

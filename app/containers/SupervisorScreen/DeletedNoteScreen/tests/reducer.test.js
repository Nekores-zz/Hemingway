import { fromJS } from 'immutable';
import deletedNoteScreenReducer from '../reducer';

describe('deletedNoteScreenReducer', () => {
  it('returns the initial state', () => {
    expect(deletedNoteScreenReducer(undefined, {})).toEqual(fromJS({}));
  });
});

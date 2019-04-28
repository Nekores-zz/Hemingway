import { fromJS } from 'immutable';
import textNoteReducer from '../reducer';

describe('textNoteReducer', () => {
  it('returns the initial state', () => {
    expect(textNoteReducer(undefined, {})).toEqual(fromJS({}));
  });
});

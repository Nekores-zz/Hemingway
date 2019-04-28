import { fromJS } from 'immutable';
import editorScreenReducer from '../reducer';

describe('editorScreenReducer', () => {
  it('returns the initial state', () => {
    expect(editorScreenReducer(undefined, {})).toEqual(fromJS({}));
  });
});

import { fromJS } from 'immutable';
import faqsReducer from '../reducer';

describe('faqsReducer', () => {
  it('returns the initial state', () => {
    expect(faqsReducer(undefined, {})).toEqual(fromJS({}));
  });
});

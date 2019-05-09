/*
 *
 * ContentScreen reducer
 *
 */

import { fromJS } from "immutable";
import { DEFAULT_ACTION, SAMPLE_ACTION } from "./constants";

export const initialState = fromJS({
  name: "ali",
  data: {},
});

function contentScreenReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SAMPLE_ACTION:
      return state.set('data', action.payload)
    default:
      return state;
  }
}

export default contentScreenReducer;

import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the contentScreen state domain
 */

const selectContentScreenDomain = state =>
  state.get("contentScreen", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ContentScreen
 */

const makeSelectContentScreen = () =>
  createSelector(selectContentScreenDomain, substate => substate.toJS());

export default makeSelectContentScreen;
export { selectContentScreenDomain };

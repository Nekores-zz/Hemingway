import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the successScreen state domain
 */

const selectSuccessScreenDomain = state =>
  state.get("successScreen", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SuccessScreen
 */

const makeSelectSuccessScreen = () =>
  createSelector(selectSuccessScreenDomain, substate => substate.toJS());

export default makeSelectSuccessScreen;
export { selectSuccessScreenDomain };

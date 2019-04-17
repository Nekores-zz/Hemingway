import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the loginScreen state domain
 */

const selectLoginScreenDomain = state => state.get("loginScreen", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginScreen
 */

const makeSelectLoginScreen = () =>
  createSelector(selectLoginScreenDomain, substate => substate.toJS());

export default makeSelectLoginScreen;
export { selectLoginScreenDomain };

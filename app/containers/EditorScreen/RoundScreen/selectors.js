import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the roundScreen state domain
 */

const selectRoundScreenDomain = state => state.get("roundScreen", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by RoundScreen
 */

const makeSelectRoundScreen = () =>
  createSelector(selectRoundScreenDomain, substate => substate.toJS());

export default makeSelectRoundScreen;
export { selectRoundScreenDomain };

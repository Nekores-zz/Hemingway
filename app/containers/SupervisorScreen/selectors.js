import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the supervisorScreen state domain
 */

const selectSupervisorScreenDomain = state =>
  state.get("supervisorScreen", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SupervisorScreen
 */

const makeSelectSupervisorScreen = () =>
  createSelector(selectSupervisorScreenDomain, substate => substate.toJS());

export default makeSelectSupervisorScreen;
export { selectSupervisorScreenDomain };

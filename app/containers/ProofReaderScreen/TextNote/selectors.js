import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the textNote state domain
 */

const selectTextNoteDomain = state => state.get("textNote", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TextNote
 */

const makeSelectTextNote = () =>
  createSelector(selectTextNoteDomain, substate => substate.toJS());

export default makeSelectTextNote;
export { selectTextNoteDomain };

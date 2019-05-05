import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the deletedNoteScreen state domain
 */

const selectDeletedNoteScreenDomain = state =>
  state.get("deletedNoteScreen", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DeletedNoteScreen
 */

const makeSelectDeletedNoteScreen = () =>
  createSelector(selectDeletedNoteScreenDomain, substate => substate.toJS());

export default makeSelectDeletedNoteScreen;
export { selectDeletedNoteScreenDomain };

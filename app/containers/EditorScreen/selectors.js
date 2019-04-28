import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the editorScreen state domain
 */

const selectEditorScreenDomain = state =>
  state.get("editorScreen", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EditorScreen
 */

const makeSelectEditorScreen = () =>
  createSelector(selectEditorScreenDomain, substate => substate.toJS());

export default makeSelectEditorScreen;
export { selectEditorScreenDomain };

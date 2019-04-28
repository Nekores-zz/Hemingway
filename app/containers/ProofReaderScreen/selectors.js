import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the proofReaderScreen state domain
 */

const selectProofReaderScreenDomain = state =>
  state.get("proofReaderScreen", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProofReaderScreen
 */

const makeSelectProofReaderScreen = () =>
  createSelector(selectProofReaderScreenDomain, substate => substate.toJS());

export default makeSelectProofReaderScreen;
export { selectProofReaderScreenDomain };

import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the faqs state domain
 */

const selectFaqsDomain = state => state.get("faqs", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Faqs
 */

const makeSelectFaqs = () =>
  createSelector(selectFaqsDomain, substate => substate.toJS());

export default makeSelectFaqs;
export { selectFaqsDomain };

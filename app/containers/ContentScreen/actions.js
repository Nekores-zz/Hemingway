/*
 *
 * ContentScreen actions
 *
 */

import { DEFAULT_ACTION, SAMPLE_ACTION } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}


export const sampleAction = payload => ({
  type: SAMPLE_ACTION,
  payload
});

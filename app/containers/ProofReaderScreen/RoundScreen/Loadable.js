/**
 *
 * Asynchronously loads the component for RoundScreen
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));

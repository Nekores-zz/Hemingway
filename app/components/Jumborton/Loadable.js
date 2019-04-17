/**
 *
 * Asynchronously loads the component for Jumborton
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));

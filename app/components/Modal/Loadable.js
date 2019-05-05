/**
 *
 * Asynchronously loads the component for Modal
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));

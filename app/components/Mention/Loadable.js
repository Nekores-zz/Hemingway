/**
 *
 * Asynchronously loads the component for Mention
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));

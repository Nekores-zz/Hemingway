/**
 *
 * Asynchronously loads the component for Textarea
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));

/**
 *
 * Asynchronously loads the component for TextNote
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));

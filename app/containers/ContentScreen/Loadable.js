/**
 *
 * Asynchronously loads the component for ContentScreen
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));

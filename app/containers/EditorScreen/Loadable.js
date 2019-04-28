/**
 *
 * Asynchronously loads the component for EditorScreen
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));

/**
 *
 * Asynchronously loads the component for NavbarUserModule
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));

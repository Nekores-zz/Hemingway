import Login from '../LoginScreen/Loadable';
import contentRoutes from '../ContentScreen/routes';
import editorRoutes from '../EditorScreen/routes';
import proofEditorRoutes from "../ProofReaderScreen/routes";
import supervisorRoutes from "../SupervisorScreen/routes";
import faqs from "../Faqs";

export default [
  // Login Screen
  {
    component: Login,
    path: "/",
    exact: true
  },
  {
    component: Login,
    path: "/login",
    exact: true
  },
  {
    component: faqs,
    path: "/faqs",
    exact: true
  },

  // Content Screen
  ...contentRoutes,

  // Editor Screen
  ...editorRoutes,

  // ProofEditor Screen
  ...proofEditorRoutes,

  // SuperVisor Screen
  ...supervisorRoutes,
];

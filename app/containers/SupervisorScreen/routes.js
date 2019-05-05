import SupervisorScreen from "./Loadable";
import SupervisorScreenDelete from "./DeletedNoteScreen";

export default [
  {
    component: SupervisorScreen,
    path: "/supervisor",
    exact: true
  },
  {
    component: SupervisorScreenDelete,
    path: "/supervisor/delete",
    exact: true
  }
];
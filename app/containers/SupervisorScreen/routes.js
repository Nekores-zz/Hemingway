import SupervisorScreen from "./Loadable";
import SupervisorScreenDelete from "./DeletedNoteScreen/Loadable";

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
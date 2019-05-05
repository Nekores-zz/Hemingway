import EditorScreen from "./Loadable";
import EditorScreenTextNote from "./TextNote/Loadable";
import EditorScreenSuccess from "./SuccessScreen/Loadable";
import EditorScreenNote from "./RoundScreen/Loadable";

export default [
    {
        component: EditorScreen,
        path: '/editor',
        exact: true
    },
    {
        component: EditorScreenTextNote,
        path: '/editor/textnote',
        exact: true,
    },
    {
        component: EditorScreenSuccess,
        path: '/editor/textnote/success',
        exact: true,
    },
    {
        component: EditorScreenNote,
        path: '/editor/textnote/note',
        exact: true,
    }
]
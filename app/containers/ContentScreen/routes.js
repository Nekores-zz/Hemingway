import ContentScreen from "./Loadable";
import ContentScreenTextNote from "./TextNote/Loadable";
import ContentScreenSuccess from "./SuccessScreen/Loadable";
import ContentScreenNote from "./RoundScreen/Loadable";

export default [
    {
        component: ContentScreen,
        path: '/content',
        exact: true
    },
    {
        component: ContentScreenTextNote,
        path: '/content/textnote',
        exact: true,
    },
    {
        component: ContentScreenSuccess,
        path: '/content/textnote/success',
        exact: true,
    },
    {
        component: ContentScreenNote,
        path: '/content/textnote/note',
        exact: true,
    }
]
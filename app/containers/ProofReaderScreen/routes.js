import ProofReaderScreen from "./Loadable";
import ProofReaderScreenTextNote from "./TextNote/Loadable";
import ProofReaderScreenSuccess from "./SuccessScreen/Loadable";
import ProofReaderScreenNote from "./RoundScreen/Loadable";

export default [
    {
        component: ProofReaderScreen,
        path: '/proofreader',
        exact: true
    },
    {
        component: ProofReaderScreenTextNote,
        path: '/proofreader/textnote',
        exact: true,
    },
    {
        component: ProofReaderScreenSuccess,
        path: '/proofreader/textnote/success',
        exact: true,
    },
    {
        component: ProofReaderScreenNote,
        path: '/proofreader/textnote/note',
        exact: true,
    }
]
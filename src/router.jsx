import {createBrowserRouter} from "react-router-dom"
import App from './App';
import Homepage from "./Homepage";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Characters from "./pages/characters";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: 'contacts/',
                element: <Contacts />
            },
            {
                path: 'about/',
                element: <About /> 
            },
            {
                path: 'characters/',
                element: <Characters  /> 
            }
        ],
        errorElement: <NotFound />
    }
])


export default router; 
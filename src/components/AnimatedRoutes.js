import Home from './Home/Home';
import Artists from './Artists/Artists';
import Error from './ErrorPage';

import {AnimatePresence} from "framer-motion";

import {Routes, Route, useLocation} from 'react-router-dom'; 

function AnimatedRoutes(){

    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location = {location} key={location.pathname}>
                <Route path = "/" element ={<Home/>} />
                <Route path = "/artists" element ={<Artists/>}/>
                <Route path = "*" element ={<Error/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;
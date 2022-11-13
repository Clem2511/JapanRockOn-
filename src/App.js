import ScrollToTop from './components/ScrollToTop';

import {BrowserRouter as Router} from 'react-router-dom'; 
import AnimatedRoutes from './components/AnimatedRoutes';

//Note on this site: As to enable multiple languages, all of the text is defined in the 'src/languages/' files

//pages rendered from components/AnimatedRoutes.js

//ScrollToTop component displays the page starting from the top when switching routes


function App() {

    return(
        <Router>
            <ScrollToTop/>
            <AnimatedRoutes/>
        </Router>
    )
  }

export default App;
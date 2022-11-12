import Home from './components/Home/Home';
import Artists from './components/Artists/Artists';
import Error from './components/ErrorPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

//Note on this site: As to enable multiple languages, all of the text is defined in the 'src/languages/' files

function App() {

    return(
        <Router>
                <Routes>
                    <Route path = "/" element ={<Home/>} />
                    <Route path = "/artists" element ={<Artists/>}/>
                    <Route path = "*" element ={<Error/>}/>
                </Routes>
            </Router>
    )
  }

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './languages/i18n';

import './index.css';

//Note on this site: As to enable multiple languages, all of the text is defined in the 'src/languages/' files

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <App/>
);


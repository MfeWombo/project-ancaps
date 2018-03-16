import React from 'react';
 import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/index.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
   <App />
    
  </BrowserRouter>,
  document.getElementById('root'),
)
registerServiceWorker()
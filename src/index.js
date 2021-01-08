import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';

import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

ReactDOM.render(
    
     <Provider store={store}><App /></Provider>,
    
  document.getElementById('root')
);

serviceWorker.unregister();

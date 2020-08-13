import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'

import {BarsStore} from './stores/bars-store'

const barsStore = new BarsStore()

const stores = {barsStore:barsStore}  

ReactDOM.render(<Provider {...stores}><App /></Provider>,document.getElementById('root')
);

serviceWorker.unregister();


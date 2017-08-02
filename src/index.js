import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { HelloWorldReducer } from './reducers';
import App from './component/app';

const store = createStore(HelloWorldReducer);

ReactDom.render((<Provider store={store}><App/></Provider>), document.querySelector('#stage'));

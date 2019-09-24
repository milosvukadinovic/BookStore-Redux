import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './containers/App';

const INITIAL_STATE = {
  books: [
    { id: Math.floor((Math.random() * 1000) + 1), title: 'Stone Age', category: 'History' },
    { id: Math.floor((Math.random() * 1000) + 1), title: 'Last Note', category: 'Romance' },
    { id: Math.floor((Math.random() * 1000) + 1), title: 'Australien', category: 'Sci-fi' },
    { id: Math.floor((Math.random() * 1000) + 1), title: 'Young Grandad', category: 'Comedy' },
  ],
};

const store = createStore(rootReducer, INITIAL_STATE);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

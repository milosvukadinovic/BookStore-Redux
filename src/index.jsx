import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './containers/App';

const createID = () => Math.floor((Math.random() * 1000) + 1);

const INITIAL_STATE = {
  books: [
    { id: createID(), title: 'Stone Age', category: 'History' },
    { id: createID(), title: 'Last Note', category: 'Romance' },
    { id: createID(), title: 'Australien', category: 'Sci-fi' },
    { id: createID(), title: 'Young Grandad', category: 'Comedy' },
  ],
};

const store = createStore(rootReducer, INITIAL_STATE);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

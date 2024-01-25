// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './_redux/store';
import PostList from './component/PostList';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddPostComp from './component/addPost';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AddPostComp />
      <PostList />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// ... (rest of the file remains unchanged)

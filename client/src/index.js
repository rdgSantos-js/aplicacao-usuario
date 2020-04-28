import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

import Routes from './routes'

ReactDOM.render(
  <Routes />
  ,
  document.getElementById('root')
);

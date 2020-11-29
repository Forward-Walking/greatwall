import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/styles.css';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Menu from './js/menu.js'

ReactDOM.render(
  <Menu />,
  document.getElementById("menu-table")
);
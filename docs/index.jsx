'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import Docs from './docs'

React.initializeTouchEvents && React.initializeTouchEvents(true);
ReactDOM.render(<Docs />, document.getElementById('rapp'));

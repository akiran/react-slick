'use strict';

import React from 'preact-compat'
import ReactDOM from 'preact-compat'
import Docs from './docs'

React.initializeTouchEvents && React.initializeTouchEvents(true);
ReactDOM.render(<Docs />, document.getElementById('rapp'));

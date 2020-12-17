import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import { prefetch } from './lib/api/gateway'

prefetch((resp) => {
    render(<App />, document.getElementById('root'));
})

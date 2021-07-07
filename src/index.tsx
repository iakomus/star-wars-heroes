import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import App from './components/App';
import { reactQueryClient } from './helpers/reactQueryClient';
import { ThemeProvider } from './providers/ThemeProvider';
import 'normalize.css';
import './index.css';

const content = (
  <React.StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then(axe => {
    axe.default(React, ReactDOM, 1000);
    ReactDOM.render(content, document.getElementById('root'));
  });
} else {
  ReactDOM.render(content, document.getElementById('root'));
}

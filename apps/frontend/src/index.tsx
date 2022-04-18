import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  RelayEnvironmentProvider,
} from 'react-relay/hooks';
import RelayEnvironment from './relay/RelayEnvironment';

const { Suspense } = React;

function AppRoot(props) {
  return (
    <React.StrictMode>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={'Loading...'}>
          <App />
        </Suspense>
      </RelayEnvironmentProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(
  <AppRoot />,
  document.getElementById('root')
);
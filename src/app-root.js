import 'react-native-gesture-handler';
import React from 'react';
import {NavigationRoot} from './pages';
import {ErrorBoundary, ErrorFallback} from './widgets';
import {Provider} from 'react-redux';
import {store} from './app/store';

export default function AppRoot() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Provider store={store}>
        <NavigationRoot />
      </Provider>
    </ErrorBoundary>
  );
}

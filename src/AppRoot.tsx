import 'react-native-gesture-handler';
import React from 'react';
import {NavigationRoot} from './pages';
import {ErrorBoundary, ErrorFallback} from './widgets';

export default function AppRoot() {
  return (
    // <ErrorBoundary fallback={<ErrorFallback />}>
    <NavigationRoot />
    // </ErrorBoundary>
  );
}

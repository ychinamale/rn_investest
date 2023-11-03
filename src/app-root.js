import 'react-native-gesture-handler';
import React from 'react';

import {NavigationRoot} from './pages';
import {ErrorBoundary, ErrorFallback} from './widgets';
import {Provider} from 'react-redux';
import {store} from './app/store';
import {initFontLibrary} from './app/icon-library';
import {useSimulatorCheck} from './modules/simulator-check.module';
import {ActivityIndicator} from 'react-native';
import {Deadzone} from './widgets';

initFontLibrary();

export default function AppRoot() {
  const {loading, isSimulator} = useSimulatorCheck();

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Provider store={store}>
        {isSimulator ? <Deadzone /> : <NavigationRoot />}
      </Provider>
    </ErrorBoundary>
  );
}

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
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {skipSimulatorCheck} from './app/environment';

initFontLibrary();

export default function AppRoot() {
  const {loading, isSimulator} = useSimulatorCheck();

  if (loading) {
    return <ActivityIndicator />;
  }

  const canContinue = skipSimulatorCheck ? true : isSimulator ? false : true;

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <SafeAreaProvider>
        <Provider store={store}>
          {canContinue ? <NavigationRoot /> : <Deadzone />}
        </Provider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}

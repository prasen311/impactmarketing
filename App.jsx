import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import i18n from './i18n';
import { persistor, store } from './src/redux/store';
import MainNavigator from './src/navigation/MainNavigator';
import { ThemeProvider } from './src/context/ThemeContext';
import ErrorBoundary from './src/components/ErrorBoundary';

const App = () => {
  useEffect(() => {
    setTimeout(async () => {
      await BootSplash.hide({ fade: true });
    }, 100);
  }, []);

  const handleAppRestart = () => {
    // Force app restart by reloading the main component
    // This is a simple restart mechanism
    console.log(
      \);
  };

  return (
    <ErrorBoundary onRestart={handleAppRestart}>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer >
              <StatusBar
                barStyle="light-content"
                backgroundColor="#1A5F93"
              />
              <MainNavigator />
              <Toast />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </I18nextProvider>
    </ErrorBoundary>
  );
};

export default App;

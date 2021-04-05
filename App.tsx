import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import AppNavigation from './Navigator';
import store from './redux/store';

interface AppProps {
  
}

const App: React.FC<AppProps> = (props) => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

const DeciderApp: React.FC<AppProps> = (props) => (
  <Provider store={store}>
    <App />
  </Provider>
);


export default DeciderApp;

import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './Navigator';

interface AppProps {
  
}

const App: React.FC<AppProps> = (props) => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}


export default App;

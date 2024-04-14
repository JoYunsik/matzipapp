import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';


import AuthStackNavigator from './src/navigations/AuthStackNavigator';
import RootNavigator from './src/navigations/root/RootNavigator';

function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}



export default App;

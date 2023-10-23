// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import * as React from 'react';
import 'react-native-gesture-handler';
import DrawerNavigator from './navigation/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './navigation/bottomTabNavigation';
// Import your screen components

// App container
function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;





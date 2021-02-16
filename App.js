import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Contact, List, Beispiel, Test } from './screens';
import { TestAsyncStorage } from './screens/TestAsyncStorage'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='async' component={TestAsyncStorage} /> */}
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Kontakt' component={Contact} />
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='Beispiel' component={Beispiel} />
        <Stack.Screen name='Test' component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;

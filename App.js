import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Contact, List, Beispiel, Test, LitnerBox, Word, Words, AddWord, LitnerTest } from './screens';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='LitnerBox' component={LitnerBox} />
        <Stack.Screen name='Kontakt' component={Contact} />
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='Beispiel' component={Beispiel} />
        <Stack.Screen name='Test' component={Test} />
        <Stack.Screen name='Word' component={Word} />
        <Stack.Screen name='Words' component={Words} />
        <Stack.Screen name='AddWord' component={AddWord} />
        <Stack.Screen name='Litner Test' component={LitnerTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;

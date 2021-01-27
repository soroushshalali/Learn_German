import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Briefe, Brief, NomVerbVerbin, ExampleNomVerb, AdjMitPro, ExampleAdj, Contact } from './screens';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Briefe' component={Briefe} />
        <Stack.Screen name='Brief' component={Brief} />
        <Stack.Screen name='Nomen Verb Verbindungen' component={NomVerbVerbin} />
        <Stack.Screen name='ExampleNomVerb' component={ExampleNomVerb} />
        <Stack.Screen name='Adjektive mit Präposition' component={AdjMitPro} />
        <Stack.Screen name='ExampleAdj' component={ExampleAdj} />
        <Stack.Screen name='Kontakt' component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;

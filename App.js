import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from "./components/MainScreen";
import Grade1 from "./Grade1.js/Grade1";
import Grade2 from "./Grade2.js/Grade2";
import Addition from "./Grade1.js/Addition";
import Subtraction from "./Grade1.js/Subtraction";
import Counting from "./Grade1.js/Counting";

import Addition2 from "./Grade2.js/Addition2";
import Subtraction2 from "./Grade2.js/Subtraction2";
import CountingPattern from "./Grade2.js/CountingPatterns";
import Time from "./Grade2.js/Time";
import Money from "./Grade2.js/Money";
const Stack = createStackNavigator();

function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen" screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Grade1" component={Grade1} />
        <Stack.Screen name="Grade2" component={Grade2} />
        <Stack.Screen name="Addition" component={Addition} />
        <Stack.Screen name="Subtraction" component={Subtraction} />
        <Stack.Screen name="Counting" component={Counting} />
        <Stack.Screen name="Addition2" component={Addition2} />
        <Stack.Screen name="Subtraction2" component={Subtraction2} />
        <Stack.Screen name="CountingPattern" component={CountingPattern} />
        <Stack.Screen name="Time" component={Time} />
        <Stack.Screen name="Money" component={Money} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


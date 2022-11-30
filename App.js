import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SetLocation from './components/setLocation'
import HomeScreen from './components/homeScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name='Iffy Eats' component={HomeScreen} />
      <Stack.Screen name='Location' component={SetLocation} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
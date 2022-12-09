import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from './src/screens/SearchScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
//import MapScreen from './src/screens/MapScreen'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="IffyEats" component={SearchScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      
      {/*<Stack.Screen name='Iffy Eats' component={HomeScreen} /> *}
      {/* <Stack.Screen name='Location' component={SetLocation} /> */}
      <Stack.Screen name='Object' component={Object} />
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
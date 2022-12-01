import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {HomeScreen, SetLocation, Object} from './components/allComponents'
import * as Location from 'expo-location';

const Stack = createNativeStackNavigator();



export default function App() {

  const [userlocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      console.log(loc)
      setUserLocation(loc);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }



  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name='Iffy Eats' component={HomeScreen} />
      <Stack.Screen name='Location' component={SetLocation} />
      {/* <Stack.Screen name='Object' component={Object} /> */}
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
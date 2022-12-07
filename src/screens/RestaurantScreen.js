import React, { useState } from 'react';
import { Image, View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useAddress';
import getCurrentLocation from '../hooks/useLocation';
import yelp from '../api/yelp';
import RestList from '../components/Restaurant';
import * as Location from 'expo-location';
import { NavigationHelpersContext } from '@react-navigation/native';
import MapScreen from './MapScreen';

const RestaurantScreen = ( { route, navigation }) => {
   
{/*}
// Function to select restaurant at random
//const foodPlace = (json.businesses)
//let oneFoodPlace = Math.floor(Math.random(foodPlace) * foodPlace.length)
   const randomSelector = () => {
     let restaurants;
     let singleRestaurant = Math.floor(Math.random(restaurants) * restaurants.length)
     return singleRestaurant
    } 
   */}
   const { state } = route.params;

   console.log('RScreen', state)
   return (
     <View>
     <RestList restaurants={state} title="Our Best Guess" />
    {/*} <Pressable
       style={({ pressed }) => [({ backgroundColor: pressed ? 'purple' : 'hotpink' }), styles.wrapperCustom]}
       onPress={() => {
        
         navigation.navigate( 'Map', {address: userAddress})}
       }
        ><Text>View On Map</Text>
      </Pressable> */}
   </View>
 );

 const styles = StyleSheet.create({
 });

}

export default RestaurantScreen
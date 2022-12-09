import React, { useState, useEffect } from 'react';
import { Image, View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useAddress';
import RestList from '../components/Restaurant';
//import * as Location from 'expo-location';
import { NavigationHelpersContext } from '@react-navigation/native';
//import MapScreen from './MapScreen';

const RestaurantScreen = ( { route, navigation }) => {

  const [userAddress, setUserAddress] = useState('');
    const [searchApi] = useRestaurants('');
    const [restaurants, setRestaurants] = useState([]);
    
   useEffect(() => {
     if (restaurants.length===0) {
      return;
     } else {
      navigation.navigate("Restaurant", {state: restaurants})
     }
   }, [restaurants]);     
   
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
     <SearchBar
         address = {userAddress}
         onSearchChange={setUserAddress}
         onSearchSubmit={() => {
          searchApi(userAddress, setRestaurants)
          }
         }
         />
   </View>
 );

 const styles = StyleSheet.create({
 });

}

export default RestaurantScreen
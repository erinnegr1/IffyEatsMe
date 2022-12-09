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
 let random_index = Math.floor(Math.random() * state.length)
   let oneFoodObject = state[random_index]

   */}
   const { state } = route.params;
  console.log('state', state)
  
  
   const filterByPrice = price => {
    return state.filter(item => {
      console.log(item.price)
      return item.price === price;
    });
   }; 
  
  

   console.log('RScreen', state)
   return (
     <View>
     <RestList restaurants={filterByPrice('$')} title="Dirty Kitchen" />
     <RestList restaurants={filterByPrice('$$')} title="Middle of the Road" />
     <RestList restaurants={filterByPrice('$$$')} title="You Fancy" />
     <RestList restaurants={filterByPrice('$$$$')} title="So you want to be a billionaire" />
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
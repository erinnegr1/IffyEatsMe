import React, { useState } from 'react';
import { Image, View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useAddress';
import getCurrentLocation from '../hooks/useLocation';
import yelp from '../api/yelp';
import RestList from '../components/Restaurant';
import * as Location from 'expo-location';
import { NavigationHelpersContext } from '@react-navigation/native';


const RestaurantScreen = ( { navigation }) => {
    const [userAddress, setUserAddress] = useState('');
    const [searchApi, restaurants] = useRestaurants('');

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
    
    return (
        <View>
        <Text>We have found {restaurants.length} results</Text>
        <RestList restaurants={restaurants} title="Our Best Guess" />
      </View>
    );

}

export default RestaurantScreen
import React, { useState, useEffect } from 'react';
import { Image, View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useAddress';
import RestList from '../components/Restaurant';
//import * as Location from 'expo-location';
import { NavigationHelpersContext } from '@react-navigation/native';
//import MapScreen from './MapScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient';

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
  
  {/*}
   const randomPicker = item => {
    return state.map(item => {
      console.log(item)
      return item
    });
   }; 
  */}

  const filterByPrice = price => {
    return state.filter(item => {
      console.log(item.price)
      return item.price === price;
    });
   }; 


   console.log('RScreen', state)
   return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
    <LinearGradient colors={['#cfe3e6','#68b8c1']} style={styles.container}>
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
   </LinearGradient>
   </KeyboardAwareScrollView>
 );
}

 const styles = StyleSheet.create({
  container: {
    flex:1,
  }
 });


export default RestaurantScreen
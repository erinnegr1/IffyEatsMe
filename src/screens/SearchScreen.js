import React, { useState } from 'react';
import { Image, View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useAddress';
import yelp from '../api/yelp';
import RestaurantsList from '../components/Restlist';
import * as Location from 'expo-location';


const SearchScreen = () => {
    const [userAddress, setUserAddress] = useState('');
    const [searchApi, restaurants] = useRestaurants('');

    const getCurrentLocation = () => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          alert('Please go to settings and allow location services');
          console.log('Location permission denied');
          return;
        };
  
        let loc = await Location.getCurrentPositionAsync({});
        console.log(loc)
        setUserAddress(loc);
      })();
    };

   
 

    return (
        <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/feedyourhangry.png')} />
        <Text style={styles.text}>Welcome to Iffy Eats!</Text>
        <SearchBar
         address = {userAddress}
         onSearchChange={setUserAddress}
         onSearchSubmit={() => searchApi(userAddress)}
         />
         
         <Pressable
          style={({ pressed }) => [({ backgroundColor: pressed ? 'purple' : 'hotpink' }), styles.wrapperCustom]}
          onPress={getCurrentLocation}
        ><Text>Use My Location Instead </Text>
        </Pressable>
          <Text>We have found {restaurants.length} results</Text>
         {/*<RestaurantsList title="You are going here:"/> */}
         </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      img: {
        height: 300,
        width: 300,
        margin: 30,
      },
});

export default SearchScreen;

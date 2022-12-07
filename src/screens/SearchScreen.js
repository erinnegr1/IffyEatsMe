import React, { useState } from 'react';
import { Image, View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useAddress';
import getCurrentLocation from '../hooks/useLocation';
import yelp from '../api/yelp';
import RestList from '../components/RestList';
import * as Location from 'expo-location';
import { NavigationHelpersContext } from '@react-navigation/native';


const SearchScreen = ( { navigation }) => {
    const [userAddress, setUserAddress] = useState('');
    const [searchApi, restaurants] = useRestaurants('');

    

    console.log('searchscreen', restaurants)

    return (
 
        <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/feedyourhangry.png')} />
        <Text style={styles.text}>Welcome to Iffy Eats!</Text>
        <SearchBar
         address = {userAddress}
         onSearchChange={setUserAddress}
         onSearchSubmit={() => {
          searchApi(userAddress);
          //navigation.navigate('Restaurant')
          }
         }
         />
         
         <Pressable
          style={({ pressed }) => [({ backgroundColor: pressed ? 'purple' : 'hotpink' }), styles.wrapperCustom]}
          onPress={() => {
            getCurrentLocation;
            navigation.navigate('Restaurant')}
          }
        ><Text>Use My Location Instead </Text>
        </Pressable>
          
          
         <RestList restaurants={restaurants} title="You are going here:"/> 
         </View> 

         //navigation.navigate('Restaurant')
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      img: {
        height: 200,
        width: 200,
        margin: 30,
      },
});

export default SearchScreen;

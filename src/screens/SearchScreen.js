import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native'
import { Image, View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useAddress';
import getCurrentLocation from '../hooks/useLocation';
import yelp from '../api/yelp';
//import RestList from '../components/Restaurant';
import * as Location from 'expo-location';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';


const SearchScreen = () => {
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

    const navigation = useNavigation();

    console.log('searchscreen', restaurants)

    return (
 
        <View style={styles.container}>
          <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../assets/order-food.json")}
          />
        {/*<Image style={styles.img} source={require('../assets/feedyourhangry.png')} />*/}
        <Text style={styles.text}>Feed your Hangry now!</Text>
        <SearchBar
         address = {userAddress}
         onSearchChange={setUserAddress}
         onSearchSubmit={() => {
          searchApi(userAddress, setRestaurants)
          }
         }
         />

        {/*} navigation.navigate('Loading') -> Restaurant */}
         
         <Pressable
          style={({ pressed }) => [({ backgroundColor: pressed ? 'purple' : 'hotpink' }), styles.wrapperCustom]}
          onPress={() => {
            getCurrentLocation;
            navigation.navigate('Restaurant', restaurants = {restaurants})}
          }
        ><Text>Use My Location Instead </Text>
        </Pressable> 
          
          
         {/*<RestList restaurants={restaurants} title="You are going here:"/> */}
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

import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native'
import { Image, View, Text, TextInput, StyleSheet, Pressable, SafeAreaView, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import useAddress from '../hooks/useAddress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//import askLocation from '../hooks/askLocation'
//import getCurrentLocation from '../hooks/useLocation';
import yelp from '../api/yelp';
//import RestList from '../components/Restaurant';
import * as Location from 'expo-location';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';


const SearchScreen = () => {
    const [userAddress, setUserAddress] = useState('');
    const [searchApi] = useAddress('');
    //const [getCurrentLocation] = askLocation()
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
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
        <View style={styles.inputContainer}>
        <Text style={styles.text}>We'll feed you!</Text>
        <SearchBar
         address = {userAddress}
         onSearchChange={setUserAddress}
         onSearchSubmit={() => {
          searchApi(userAddress, setRestaurants)
          }
         }
         />
         
         <TouchableOpacity
          style={styles.button}
          onPress={() => {
            //getCurrentLocation;git
          }}
        ><Text>Use My Location </Text>
        </TouchableOpacity> 
         
         </View> 
         <View style={{height: 400, width:450}}>
         <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../assets/order-food.json")}
           /> 
           </View>
          </View>
        
        </KeyboardAwareScrollView>
         
    )
};

const styles = StyleSheet.create({
    inputContainer: {

        alignItems: 'center',
        padding:9,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#68b8c1',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity:0.25,
        
      },
      img: {
        height: 200,
        width: 200,
        margin: 30,
      },
      button: {
        
        backgroundColor: '#fa7e3e',
        borderRadius:8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity:0.25,


      },
      container: {
        
        backgroundColor: '#cfe3e6',
        alignItems: 'center',
        justifyContent: 'center',
      },
     
      
});

export default SearchScreen;

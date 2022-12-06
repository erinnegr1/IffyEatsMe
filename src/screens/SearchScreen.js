import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/Restlist';


const SearchScreen = () => {
    const [userAddress, setUserAddress] = useState('');
    const [searchApi, restaurants] = useRestaurants();
    

    return (
        <View style={styles.container}>
        {/*<Image style={styles.img} source={require('../assets/pickyourfood.json')} />*/}
        <Text style={styles.text}>Welcome to Iffy Eats!</Text>
        <SearchBar
         address = {userAddress}
         onTermChange={setUserAddress}
         onAddressSubmit={() => searchApi(userAddress)}
         />
         {/* <Text>We have found {restaurants.length} results</Text>
         <RestaurantsList title="You are going here:"/> */}
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

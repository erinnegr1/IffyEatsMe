import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestDetails from './RestDetails'


const RestList =  ({ restaurants }) => {

    console.log("restaurantList", restaurants)
    return (
        <View>
            <FlatList
            data = {restaurants} 
            keyExtractor = {restaurant => restaurant.id}
            renderItem={({item}) => {
                return <RestDetails restaurant={item} />
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  });

export default RestList
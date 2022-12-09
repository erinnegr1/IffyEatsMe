import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestDetails from './RestaurantAttributes'


const RestList =  ({ restaurants }) => {

    
    return (
        <View>
            <FlatList
            horizontal
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
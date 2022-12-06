import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const RestaurantList =  ({ restaurants }) => {
    return (
        <View>
            <FlatList
            horizontal
            data = {restaurants} 
            keyExtractor = {restaurant => restaurant.id}
            renderEach={({item}) => {
                return <RestDetails restaurant={item} />
            }}
            />
        </View>
    )
}

export default RestaurantList
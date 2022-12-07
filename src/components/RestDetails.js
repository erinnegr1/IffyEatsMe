import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const RestDetails = ({restaurant}) => {
    console.log('details', restaurant)

    return (
      <View>
        <Text>{restaurant.name}</Text>
        <Image style={styles.image} source={{uri: restaurant.image_url}} /> 
        <Text>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
      </View>
    )
    
}

const styles = StyleSheet.create({
    image: {
      width: 250,
      height: 120,
      borderRadius: 4
    },
    name: {
      fontWeight: 'bold'
    }
  });

  export default RestDetails
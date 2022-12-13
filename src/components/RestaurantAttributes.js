import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, Linking} from 'react-native';
import { GOOGLE_API_KEY} from '@env';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const RestDetails = ({restaurant}) => {
    console.log('details', restaurant)
    console.log(restaurant.coordinates)
    console.log(restaurant.coordinates.latitude)
    const [coords, setCoords] = useState({});
{
    useEffect(() => {
      if (restaurant.length===0){
        return;
      } else {
        setCoords({
        lat: restaurant.coordinates.latitude,
        long: restaurant.coordinates.longitude
      })
      
      }
    }, [])

   
  const staticMapConstructor = (lat,long) => {
    const mapImageURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=16&size=400x200&maptype=roadmap
   &markers=markers=icon:http%3A%2F%2Ftinyurl.com%2F2ftvtt6|${lat},${long}
   &key=${GOOGLE_API_KEY}`;

   console.log(mapImageURL)
   return mapImageURL;
  } 

    return (
      <View style={styles.outerContainer}>
        <Text> It was written in the stars... </Text>
        <View style={styles.foodplace}>
        <Text>{restaurant.name}</Text>
        <Image style={styles.image} source={{uri: restaurant.image_url}} /> 
        <Text>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
      <Text style={{color: 'teal'}}
            onPress={() => Linking.openURL(restaurant.url)}>
            View Menu
      </Text>
      </View>
      <Image 
          style={{width: 400, height: 200}}
          source={{uri: staticMapConstructor(coords.lat, coords.long)
      }} />
      </View>
    )
    
}}

const styles = StyleSheet.create({
    image: {
      width: 250,
      height: 120,
      borderRadius: 4
    },
    name: {
      fontWeight: 'bold'
    },
    outerContainer: {
      alignItems: 'center',
    },
    foodplace: {
      backgroundColor: '#F0EEEE',
      padding: 60,
      borderRadius: 300,
    }
  });

  export default RestDetails
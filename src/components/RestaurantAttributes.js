import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, Linking} from 'react-native';
import { GOOGLE_API_KEY} from '@env';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



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
      
      <View style={styles.container}>
        <Text style= {styles.title}> The Oracle knows... </Text>
        <View style={styles.foodplace}>
        <Text style={styles.name}>{restaurant.name} </Text>
        <Image style={styles.image} source={{uri: restaurant.image_url}} /> 
        <View style={styles.lineItems}>
        <Text >
        {restaurant.rating} Stars |  {restaurant.review_count} Reviews | {restaurant.price}
      </Text>
      <Text style={{color: 'teal'}}
            onPress={() => Linking.openURL(restaurant.url)}>
            View Menu
      </Text>
      </View>
      </View>
      <View style={styles.mapBox}>
      <Image 
          style={styles.map}
          source={{uri: staticMapConstructor(coords.lat, coords.long)
      }} />
      </View>
      </View>
      
    )
    
}}

const styles = StyleSheet.create({
    image: {
      width: 340,
      height: 200,
      borderRadius: 4
    },
    name: {
      fontWeight: 'bold',
      padding: 5,
    },
    foodplace: {
      margin:11,
      borderRadius: 8,
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: 'white',
      padding: 11,
      justifyContent: 'center',
    },
    map: {
      width: 330,
      height: 200,
      margin: 16,
      
     

    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    title: {
      margin: 16,
    },
    lineItems: {
      padding: 5,
      alignItems: 'center',
    },
    mapBox: {
      backgroundColor: 'white',
      borderRadius: 8,
    }
  });

  export default RestDetails
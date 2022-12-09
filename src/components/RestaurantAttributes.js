import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import { GOOGLE_API_KEY} from '@env';


const RestDetails = ({restaurant}) => {
    console.log('details', restaurant)
    //const [coords, setCoords] = useState();
{/*}
    useEffect(() => {
      if (restaurant.length===0){
        return;
      } else {
        setCoords({
        lat:restaurant.coordinates.latitude,
        long: restaurant.coordinates.latitude
      })
      }
    })

   
  const staticMapConstructor = (lat,long) => {
    const mapImageURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=13&size=400x200&maptype=roadmap
   &markers=color:teal%7Clabel:S%7C${lat},${long}
   &key=${GOOGLE_API_KEY}`;
   return mapImageURL;
  } */}

    return (
      <View>
        <Text> Our Pick for you is... </Text>
        <Text>{restaurant.name}</Text>
        <Image style={styles.image} source={{uri: restaurant.image_url}} /> 
        <Text>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
      {/*<Image source={{uri: staticMapConstructor(setCoords.lat, setCoords.long) 
      }} />*/}
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
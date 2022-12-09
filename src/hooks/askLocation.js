import * as Location from 'expo-location';
import { useState } from "react";



const getCurrentLocation = () => {
 
const [userLocation, setUserLocation] = useState('');
const [errorMsg, setErrorMsg] = useState("");

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        alert('Please go to settings and allow location services');
        console.log('Location permission denied');
        return;
      };

      let loc = await Location.getCurrentPositionAsync({});
      
      setUserLocation(loc);
      console.log('useLocation', userLocation)
    })();
    
    







  };
   
export default getCurrentLocation; 


 
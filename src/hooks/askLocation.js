import * as Location from "expo-location";
import { useState, useEffect } from "react";

{/*}
const getCurrentLocation = () => {
  const [userLocation, setUserLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
}

export default getCurrentLocation;


*/}
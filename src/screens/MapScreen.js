import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";


export default function MapScreen() {
    const mapRef = useRef(null);

    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const newYorkRegion = {
        latitude: 40.754932,
        longitude: -73.984016,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const goToNewYork = () => {
        //Animate the user to new region. Complete this animation in 3 seconds
        mapRef.current.animateToRegion(newYorkRegion, 3 * 1000);
    };

    return (
        <View style={styles.container}>
            <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
                latitude: 24.8607,        
                longitude: 67.0011,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            onRegionChangeComplete={(region) => setRegion(region)}
            />      
            <Marker 
                coordinate={newYorkRegion}
                pinColor="red" 
            />
            {/* <Button onPress={() => goToNewYork()} title="Go to Map" /> */}
            <Text style={styles.text}>Current latitude{region.latitude}</Text>
            <Text style={styles.text}>Current longitude{region.longitude}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 20,
    backgroundColor: "lightblue",
  },
});
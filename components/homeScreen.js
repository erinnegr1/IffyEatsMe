import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import * as Location from 'expo-location';

function HomeScreen({ navigation }) {

  const [userlocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const onPressHandler = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        alert('Please go to settings and allow location services');
        console.log('Location permission denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      console.log(loc)
      setUserLocation(loc);
    })()
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        console.log('Location permission denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      console.log(loc)
      setUserLocation(loc);
    })();
  }, []);

  console.log(userlocation)

  function latitude() {
    if (userlocation) {
      console.log(userlocation.coords.latitude)
    }
  }
  latitude()

  function longitude() {
    if (userlocation) {
      console.log(userlocation.coords.longitude)
    }
  }
  longitude()

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (userlocation) {
    text = JSON.stringify(userlocation);
  }


  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/Feed-Your-Hangry.png')} />
      <Text style={styles.text}>Welcome to Iffy Eats!</Text>
      {!userlocation ? <View>
        <Pressable
          style={({ pressed }) => [({ backgroundColor: pressed ? 'purple' : 'hotpink' }), styles.wrapperCustom]}
          onPress={onPressHandler}
        >
          <Text style={styles.btnText}>Use My Location</Text>
        </Pressable>
        <Text style={styles.textSpacer}>------------------- OR ------------------</Text>
        <TextInput
          style={styles.input}
          keyboardType={'default'}
          placeholder={'Enter Address'}
        ></TextInput>
        <Pressable
          style={({ pressed }) => [({ backgroundColor: pressed ? 'purple' : 'hotpink' }), styles.wrapperCustom]}
        >
          <Text style={styles.btnText}>Enter Address</Text>
        </Pressable>
      </View> :
        <Pressable
          style={({ pressed }) => [({ backgroundColor: pressed ? 'purple' : 'hotpink' }), styles.wrapperCustom]}
        >
          <Text style={styles.btnText}>Click to feed your hangry!</Text>
        </Pressable>}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 300,
    width: 300,
    margin: 30,
  },
  input: {
    borderWidth: 3,
    borderColor: "chartreuse",
    fontSize: 30,
  },
  text: {
    marginBottom: 60,
    textAlign: 'center'
  },
  textSpacer: {
    marginTop: 10,
    marginBottom: 12,
    textAlign: 'center'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    margin: 10,
    width: 150,
    textAlign: 'center',
    alignSelf: 'center',
  },
  btnText: {
    textAlign: 'center'
  }
});

export default HomeScreen
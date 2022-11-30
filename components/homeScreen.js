import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

function HomeScreen({navigation}) {
    const onPressHandler =() =>{
      navigation.navigate('Location')
    }
    return (
      <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/Feed-Your-Hangry.png')} />
      <Text style={styles.text}>Welcome to Iffy Eats!</Text>
      <Pressable
        style={({pressed})=>[({backgroundColor: pressed ? 'purple':'hotpink'}), styles.wrapperCustom]}
        onPress={onPressHandler}
        >
        <Text>Click to feed your hangry</Text>
      </Pressable>
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
      margin: 10
    },
    input: {
      borderWidth: 3,
      borderColor: "chartreuse",
      fontSize: 30
     },
    text: {
      margin: 10
    },
    button: {
      margin: 10,
      padding: 10
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 6
    }
  });

export default HomeScreen
import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View, Alert, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  const onPressHandler =() =>{
    navigation.navigate('Location')
  }
  return (
    <View style={styles.container}>
    <Image style={styles.img} source={require('./assets/Feed-Your-Hangry.png')} />
    <Text style={styles.text}>Click to Feed Your Hangry</Text>
    <View>
    <Pressable
      style={({pressed})=>({backgroundColor: pressed ? 'purple':'hotpink'})}
      onPress={onPressHandler}
      >
      <Text>Click to go to Location Page</Text>
    </Pressable>
    </View>
    <StatusBar style="auto" />
  </View>
  )
}

function SetLocation({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Iffy Eats')
  }
  return (
    <View>
      <Text>Enter Zip Code</Text>
      <Pressable
      style={({pressed})=>({backgroundColor: pressed ? 'purple':'hotpink'})}
      onPress={onPressHandler}
      >
      <Text>Click to go to Home Page</Text>
    </Pressable>
    </View>
  )
}






function HomeScreen2() {
  return (
    <View style={styles.container}>
    <Image style={styles.img} source={require('./assets/Feed-Your-Hangry.png')} />
    <Text style={styles.text}>Welcome to Iffy Eats!</Text>
    <Button
    onPress={() => alert('Allow app to use location?')}
    title="Click to Feed Your Hangry"
    color={'hotpink'}
    />
  </View>
);
}

function SetLocation2() {
  return (
    <View>
      <Text>Enter Zip Code</Text>
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Iffy Eats" component={HomeScreen} />
      <Stack.Screen name='Location' component={SetLocation} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
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
  text: {
    margin: 10
  },
  button: {
    margin: 10,
    padding: 10
  }
});

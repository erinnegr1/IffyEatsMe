import React from 'react';
import { View, TextInput, StyleSheet, onChangeText } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = (userAddress, onTermChange, onAddressSubmit ) => {
    return (
        <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Enter Your Address"
        value={userAddress}
        onChangeText={onTermChange}
        onEndEditing={onAddressSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;

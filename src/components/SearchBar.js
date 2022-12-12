import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({userAddress, onSearchChange, onSearchSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        keyboardType={'default'}
        placeholder="Enter your Address"
        value={userAddress}
        onChangeText={newAddress => onSearchChange(newAddress)}
        onEndEditing={() => onSearchSubmit()}
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
    marginHorizontal: 15,
    color: '#7A00B2',
  }
});

export default SearchBar;

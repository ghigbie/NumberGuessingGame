import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Colors from './../constants/colors';

const Header = ({title = 'Header'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '12%',
    minHeight: 90,
    width: '100%',
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
  },
  headerText: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Header;

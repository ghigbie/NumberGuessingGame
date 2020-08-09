import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Colors from './../constants/colors';

const Header = ({title = 'Header'}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...Platform.select({
          android: styles.containerAndroid,
          ios: styles.containerIOS,
        }),
      }}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '12%',
    minHeight: 90,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
  containerIOS: {
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerText: {
    color: Platform.OS === 'ios' ? Colors.primary : '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Header;

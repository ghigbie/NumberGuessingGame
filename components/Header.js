import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Header;

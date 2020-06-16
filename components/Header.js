import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title = 'Header'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: '100%',
    padding: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#888',
    fontSize: 16,
  },
});

export default Header;

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
    height: '12%',
  },
  headerText: {
    color: '#888',
  },
});

export default Header;

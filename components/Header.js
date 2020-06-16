import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
      <View style={styles.container}>
        <Text style-{styles.headerText}>Header</Text>
     </View>
    );
};

const styles = StyleSheet.create({
  container: {
      height: '12%'
  },
  headerText: {
      color: '#888'
  }
});

export default Header;

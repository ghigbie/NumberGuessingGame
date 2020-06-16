import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Screen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Screen Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenText: {
    color: '#888',
  },
});

export default Screen;

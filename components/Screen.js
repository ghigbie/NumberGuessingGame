import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Screen = ({title = 'Header'}) => {
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

export default Srean;

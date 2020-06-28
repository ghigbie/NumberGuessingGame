import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import NumberContainer from './../components/NumberContainer';

const GameScreemTest = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Screen Test</Text>
      <NumberContainer>{99}</NumberContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    height: '100%',
  },
  text: {
    fontSize: 26,
    backgroundColor: 'blue',
    height: 20,
  },
});

export default GameScreemTest;

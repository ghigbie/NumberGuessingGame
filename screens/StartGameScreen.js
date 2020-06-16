import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StartGameScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Start Game Screen Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  screenText: {
    color: '#888',
  },
});

export default StartGameScreen;

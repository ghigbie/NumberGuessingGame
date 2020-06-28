import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameOverScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Over</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default GameOverScreen;

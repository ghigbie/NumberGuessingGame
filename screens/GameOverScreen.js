import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameOverScreen = ({guessRounds, userNumber}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Over!</Text>
      <Text style={styles.text}>
        I won! It only took me {guessRounds}
        {''}
        {guessRounds > 0 ? 'tries' : 'try'}!
      </Text>
      <Text style={styles.text}>The number was: {userNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 36,
    marginVertical: 86,
  },
  text: {
    fontSize: 24,
    height: 24,
    fontWeight: '700',
    marginVertical: 14,
  },
});

export default GameOverScreen;

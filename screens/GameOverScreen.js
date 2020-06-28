import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameOverScreen = () => {
  const [win, setWin] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Over!</Text>
      <Text style={styles.text}>{win ? 'You won!' : 'You lost'}</Text>
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

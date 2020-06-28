import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Colors from './../constants/colors';

import NumberContainer from './../components/NumberContainer';
import Card from './../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({userChoice}) => {
  console.log(userChoice);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(0, 100, userChoice),
  );
  console.log(currentGuess);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="Lower"
          color={Colors.accent}
          onPress={() => {
            console.log('lower pressed');
          }}
        />
        <Button
          title="Greater"
          color={Colors.primary}
          onPress={() => {
            console.log('greater pressed');
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    marginTop: 26,
    marginBottom: 14,
    height: 24,
    color: Colors.softGrey,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
    minHeight: 80,
  },
});

export default GameScreen;

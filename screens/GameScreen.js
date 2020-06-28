import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
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

  const nextGuessHandler = direction => {
    console.log(`nextGeussHandler called DIRECTION: ${direction}`);
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', {
        text: 'Sorry!',
        style: 'cancel',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="Lower"
          color={Colors.accent}
          onPress={() => {
            nextGuessHandler('lower');
          }}
        />
        <Button
          title="Greater"
          color={Colors.primary}
          onPress={() => {
            nextGuessHandler('greater');
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

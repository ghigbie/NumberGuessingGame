import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import Colors from './../constants/colors';

import NumberContainer from './../components/NumberContainer';
import Card from './../components/Card';
import TitleText from './../components/TitleText';
import ListItem from './../components/ListItem';

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

const GameScreen = ({userChoice, onGameOver}) => {
  const [guesses, setGuesses] = useState([]);

  const absMin = 0;
  const absMax = 100;

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(absMin, absMax, userChoice),
  );
  const currentLow = useRef(absMin);
  const currentHigh = useRef(absMax);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    console.log(`nextGeussHandler called DIRECTION: ${direction}`);
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert(
        "Don't lie!",
        'You know that this is wrong...Is number greater or lower?',
        [
          {
            text: 'Sorry!',
            style: 'cancel',
          },
        ],
      );
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentHigh.current,
      currentLow.current,
    );
    console.log('NEXT NUMBER: ', nextNumber);
    setCurrentGuess(nextNumber);
    setGuesses([currentGuess, ...guesses]);
  };

  return (
    <View style={styles.container}>
      <TitleText style={styles.text}>Opponent's Guess</TitleText>
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
      {guesses.length > 0 && (
        <Card style={styles.guessCard}>
          {guesses.map((guess, index) => (
            <ListItem key={index} style={styles.guessContainer} item={guess} />
          ))}
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginVertical: 12,
    height: 36,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
    minHeight: 80,
  },
  guessCard: {
    marginVertical: 16,
    minHeight: 240,
    padding: 18,
  },
  guessContainer: {
    height: 22,
    marginVertical: 8,
  },
  guessText: {
    fontSize: 22,
    height: 26,
    paddingLeft: 4,
    color: Colors.primary,
  },
});

export default GameScreen;

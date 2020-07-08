import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
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
        <View
          style={
            Dimensions.get('window').width > 350
              ? styles.guessListContainer
              : styles.guessListContainerSmall
          }>
          <ScrollView contentContainerStyle={styles.list}>
            {guesses.map((guess, index) => (
              <ListItem
                key={index}
                style={styles.guessContainer}
                item={guess}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
    width: '70%',
    maxWidth: '80%',
    minHeight: 80,
  },
  guessCard: {
    flex: 1,
    marginVertical: 16,
    padding: 18,
  },
  guessListContainer: {
    flex: 1,
    marginTop: 44,
    minHeight: 300,
    width: '60%',
  },
  guessListContainerSmall: {
    flex: 1,
    marginTop: 44,
    minHeight: 300,
    width: '80%',
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default GameScreen;

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
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100),
    userChoice,
  );
  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Button
          title="Lower"
          onPress={() => {
            console.log('lower pressed');
          }}
        />
        <Button
          title="Greater"
          onPress={() => {
            console.log('greater pressed');
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default GameScreen;

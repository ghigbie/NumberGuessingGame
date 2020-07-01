import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Colors from './../constants/colors';
import Card from './../components/Card';
import TitleText from './../components/TitleText';
import BodyText from './../components/BodyText';

const GameOverScreen = ({guessRounds, userNumber, onStartGame}) => {
  return (
    <View style={styles.container}>
      <TitleText style={styles.text}>Game Over!</TitleText>
      <Image source={require('./../assets/success.png')} style={styles.image} />
      <BodyText style={styles.text}>
        I won! It only took me {guessRounds}
        {guessRounds > 1 ? ' tries' : ' try'}!
      </BodyText>
      <Text style={styles.text}>The number was: {userNumber}</Text>
      <View style={styles.buttonContainer}>
        <Button title="New Game" onPress={onStartGame} color={Colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    marginVertical: 124,
    minHeight: 300,
  },
  text: {
    fontSize: 24,
    height: 28,
    marginVertical: 14,
  },
  buttonContainer: {
    marginVertical: 24,
  },
  image: {
    width: '80%',
    height: 240,
    borderRadius: 35,
  },
});

export default GameOverScreen;

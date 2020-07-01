import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Colors from './../constants/colors';
import Card from './../components/Card';
import TitleText from './../components/TitleText';
import BodyText from './../components/BodyText';

const GameOverScreen = ({guessRounds, userNumber, onStartGame}) => {
  return (
    <Card>
      <View style={styles.container}>
        <TitleText style={styles.text}>Game Over!</TitleText>
        <BodyText style={styles.text}>
          I won! It only took me {guessRounds}
          {guessRounds > 1 ? ' tries' : ' try'}!
        </BodyText>
        <Text style={styles.text}>The number was: {userNumber}</Text>
        <Button title="New Game" onPress={onStartGame} color={Colors.primary} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    marginVertical: 86,
    minHeight: 300,
  },
  text: {
    fontSize: 24,
    height: 28,
    marginVertical: 14,
  },
});

export default GameOverScreen;

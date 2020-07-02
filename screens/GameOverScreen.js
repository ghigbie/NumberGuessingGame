import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Colors from './../constants/colors';
import TitleText from './../components/TitleText';
import BodyText from './../components/BodyText';
import MainButton from './../components/MainButton';
import colors from './../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const GameOverScreen = ({guessRounds, userNumber, onStartGame}) => {
  return (
    <View style={styles.container}>
      <TitleText style={styles.text}>Game Over!</TitleText>
      <Image
        source={require('./../assets/success.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <BodyText style={styles.text}>
        I won! It only took me{' '}
        <Text style={styles.highlight}>{guessRounds}</Text>
        {guessRounds > 1 ? ' tries' : ' try'}!
      </BodyText>
      <Text style={styles.text}>
        The number was: <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <MainButton onPress={onStartGame}>
          <Icon name="rocket" size={24} color="#fff" />
        </MainButton>
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
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 24,
  },
  image: {
    width: '80%',
    height: 240,
    borderRadius: 35,
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'OpenSans-Bold',
  },
});

export default GameOverScreen;

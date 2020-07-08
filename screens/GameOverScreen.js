import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Colors from './../constants/colors';
import TitleText from './../components/TitleText';
import BodyText from './../components/BodyText';
import MainButton from './../components/MainButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GameOverScreen = ({guessRounds, userNumber, onStartGame}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyles={styles.scrollView}
        showsVerticalScrollIndicator={true}>
        <View style={styles.centerContainer}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: windowHeight * 0.0175,
  },
  scrollView: {
    flex: 1,
  },
  centerContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: windowHeight < 400 ? 16 : 20,
    height: 28,
    marginVertical: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: windowHeight * 0.025,
    width: 100,
    alignItems: 'center',
  },
  image: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
    borderRadius: (windowWidth * 0.7) / 2,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'OpenSans-Bold',
  },
});

export default GameOverScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Colors from './../constants/colors';
import Card from './../components/Card';
import Input from './../components/Input';
import NumberContainer from './../components/NumberContainer';
import TitleText from './../components/TitleText';
import BodyText from './../components/BodyText';
import MainButton from './../components/MainButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const StartGameScreen = ({onStartGame}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numberInputHandler = inputText => {
    const sanitizedText = inputText.replace(/[^0-9]/g, '');
    setEnteredValue(sanitizedText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      console.log('invalid input: NaN or less than 0');
      Alert.alert(
        'Invalid Number Entered',
        'Please enter a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputhandler}],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  const resetInputhandler = () => {
    setEnteredValue('');
    setConfirmed(false);
    setSelectedNumber(null);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TitleText style={styles.title}>Start a New Game</TitleText>
      <Card style={styles.inputContainer}>
        <TitleText style={styles.title}>Select a Number</TitleText>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrenct={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.accent}
              onPress={() => {
                resetInputhandler();
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color={Colors.primary}
              onPress={() => {
                confirmInputHandler();
              }}
            />
          </View>
        </View>
      </Card>
      {confirmed && (
        <Card style={styles.summaryContainer}>
          <BodyText>You Selected:</BodyText>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <View style={styles.summaryButtonContainer}>
            <MainButton onPress={() => onStartGame(selectedNumber)}>
              START GAME
            </MainButton>
          </View>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: Colors.softGrey,
    fontSize: 24,
    marginVertical: 12,
    height: 36,
  },
  cardTitle: {
    color: Colors.softGrey,
    fontSize: 20,
    marginVertical: 12,
    height: 30,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,
    minHeight: '40%',
  },
  input: {
    width: '80%',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  button: {
    width: 100,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
    height: 200,
  },
  summaryButtonContainer: {
    marginTop: 8,
  },
});

export default StartGameScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Colors from './../constants/colors';
import Card from './../components/Card';
import Input from './../components/Input';

const StartGameScreen = ({}) => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = inputText => {
    const sanitizedText = inputText.replace(/[^0-9]/g, '');
    setEnteredValue(sanitizedText);
  };

  const resetInputhandler = () => {
    setEnteredValue('');
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.itle}>Select a Number</Text>
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
                  console.log('Confirm was pressed');
                  resetInputhandler();
                }}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
    fontWeight: '700',
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
});

export default StartGameScreen;

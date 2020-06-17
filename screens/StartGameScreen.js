import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const StartGameScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Number</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color="#f7287b"
              onPress={() => {
                console.log('Reset was pressed');
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              onPress={() => {
                console.log('Confirm was pressed');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  title: {
    color: '#888',
    fontSize: 20,
    marginVertical: 12,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#888',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 24,
    borderRadius: 12,
    height: 200,
    minHeight: '40%',
  },
  input: {
    borderColor: '#888',
    color: '#888',
    borderWidth: 1,
    width: '80%',
    borderRadius: 4,
    padding: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  button: {
    borderRadius: 12,
  },
});

export default StartGameScreen;

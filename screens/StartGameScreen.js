import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const StartGameScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Number</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            color="#f7287b"
            onPress={() => {
              console.log('Reset was pressed');
            }}
          />
          <Button
            title="Confirm"
            onPress={() => {
              console.log('Confirm was pressed');
            }}
          />
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
    justifyContent: 'flex-start',
  },
  title: {
    color: '#888',
    fontSize: 20,
    marginVertical: 12,
    height: 30,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#aaa',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: '#fff',
    elevation: 6,
    padding: 22,
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
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
});

export default StartGameScreen;

import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {primary, accent} from './../constants/colors';
import Card from './../components/Card';

const StartGameScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Number</Text>
      <Card style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            color={accent}
            onPress={() => {
              console.log('Reset was pressed');
            }}
          />
          <Button
            title="Confirm"
            color={primary}
            onPress={() => {
              console.log('Confirm was pressed');
            }}
          />
        </View>
      </Card>
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

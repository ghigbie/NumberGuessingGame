import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const StartGameScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Number</Text>
      <TextInput />
      <View style={styles.buttonContainer}>
        <Button
          title="Reset"
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  screenText: {
    color: '#888',
  },
});

export default StartGameScreen;

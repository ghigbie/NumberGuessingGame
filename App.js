/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App: () => React$Node = () => {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = selectedNumber => setUserNumber(selectedNumber);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Guess the Number" />
        {userNumber ? (
          <GameScreen userChoice={userNumber} />
        ) : (
          <StartGameScreen onStartGame={startGameHandler} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

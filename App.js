/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Guess the Number" />
        <StartGameScreen />
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

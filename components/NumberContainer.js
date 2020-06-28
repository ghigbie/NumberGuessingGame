import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from './../constants/colors';

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent,
    fontSize: 22,
    height: 24,
    marginBottom: 6,
  },
});

export default NumberContainer;

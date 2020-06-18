import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from './../constants/colors';

const Input = (props, {style}) => (
  <TextInput {...props} style={{...styles.input, ...style}} />
);

const styles = StyleSheet.create({
  input: {
    height: 30,
    padding: 6,
    borderColor: Colors.softGrey,
    color: Colors.softGrey,
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default Input;

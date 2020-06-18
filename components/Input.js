import React from 'react';
import {TextInput, Stylesheet} from 'react-native';
import Colors from './../constants/colors';

const Input = ({style}) => (
  <TextInput style={{...Stylesheet.input, ...style}} />
);

const styles = Stylesheet.create({
  input: {
    height: 30,
    width: '80%',
    borderColor: Colors.softGrey,
    color: Colors.softGrey,
    borderWidth: 1,
    borderRadius: 4,
  },
});

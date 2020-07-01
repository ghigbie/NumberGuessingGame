import React from 'react';

import {Text, StyleSheet} from 'react-native';
import Colors from './../constants/colors';

const BodyText = ({style, children}) => (
  <Text style={{...styles.body, ...style}}>{children}</Text>
);

const styles = StyleSheet.create({
  body: {
    color: '#000',
    fontSize: 18,
    height: 22,
    fontFamily: 'OpenSans-Regular',
  },
});

export default BodyText;

import React from 'react';

import {Text, StyleSheet} from 'react-native';
import Colors from './../constants/colors';

const BodyText = ({style, children}) => (
  <Text style={{...styles.body, ...style}}>{children}</Text>
);

const styles = StyleSheet.create({
  body: {
    color: Colors.softGrey,
    fontSize: 24,
    marginVertical: 12,
    height: 36,
    fontFamily: 'OpenSans-Bold',
  },
});

export default BodyText;

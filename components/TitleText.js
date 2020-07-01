import React from 'react';

import {Text, StyleSheet} from 'react-native';
import Colors from './../constants/colors';

const TitleText = ({style, children}) => (
  <Text style={{...styles.title, ...style}}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    color: Colors.softGrey,
    fontSize: 18,
    marginVertical: 12,
    height: 36,
    fontFamily: 'OpenSans-Bold',
  },
});

export default TitleText;

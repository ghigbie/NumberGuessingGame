import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from './../constants/colors';

const MainButton = ({style, onPress, children}) => (
  <TouchableOpacity onPress={() => {}}>
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingVerticle: 12,
    paddingHorizontal: 30,
  },
  text: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 80,
  },
});

export default MainButton;

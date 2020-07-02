import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from './../constants/colors';

const MainButton = ({style, onPress, children}) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={{...styles.container, ...style}}>
      <Text style={styles.text}>{children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 26,
    height: 38,
  },
  text: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default MainButton;

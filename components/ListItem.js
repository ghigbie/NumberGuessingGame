import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from './../constants/colors';

const ListItem = ({item, style}) => (
  <View style={{...styles.itemContainer, ...style}}>
    <Text style={styles.itemText}>{item}</Text>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    height: 22,
    marginVertical: 8,
  },
  itemText: {
    fontSize: 22,
    height: 26,
    paddingLeft: 4,
    fontFamily: 'OpenSans-Regular',
    color: Colors.primary,
  },
});

export default ListItem;
